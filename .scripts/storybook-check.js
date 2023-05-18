#!/usr/bin/env node

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const srcPath = process.env.STORYBOOK_COMPONENTS_PATH;
const excludedFilesString = process.env.STORYBOOK_EXCLUDED_FILES;
const storiesPath = process.env.STORYBOOK_STORIES_PATH;

function findTSXFiles(directory, excludedFiles = []) {
  return glob.sync('**/*.tsx', { cwd: directory, ignore: excludedFiles });
}

function findStoriesFilesAndStripExtensions(directory) {
  const files = [];
  const filePaths = glob.sync('**/*.stories.tsx', { cwd: directory });
  filePaths.forEach((filePath) => {
    files.push(filePath.replace('.stories', ''));
  });
  return files;
}

function throwError(message) {
  console.error('\x1b[31m', message);
  process.exit(1);
}

if (srcPath && excludedFilesString) {
  const excludedFiles = excludedFilesString.split(',');
  const tsxFiles = findTSXFiles(srcPath, excludedFiles);
  const storiesFiles = findStoriesFilesAndStripExtensions(storiesPath);
  const difference = tsxFiles.filter(x => !storiesFiles.includes(x));
  if (difference.length > 0) {
    throwError(`Missing stories for the following components:\n - ${difference.join('\n - ')}`);
  }
  console.log(difference);
  process.exit(0);
} else {
  throwError('Add STORYBOOK_COMPONENTS_PATH and STORYBOOK_EXCLUDED_FILES to .env file!');
}


