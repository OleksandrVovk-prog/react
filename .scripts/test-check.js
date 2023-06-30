#!/usr/bin/env node

require('dotenv').config();
const glob = require('glob');
const pagesFolderName = 'pages';
const testsFolderName = 'tests';
const srcPath = process.env.SRC_PATH;
const excludedFilesString = process.env.EXCLUDED_FILES;

function findTSXFiles(directory, excludedFiles = []) {
  return glob.sync('**/*.tsx', { cwd: directory, ignore: excludedFiles });
}

function checkIsTestExists(file) {
  const arrayPath = file.split('/');
  const fileName = arrayPath[arrayPath.length - 1];
  const testsFile = `${testsFolderName}/${fileName.replace('.tsx', '.test.tsx')}`;
  const parentFolder = `${srcPath}/${arrayPath.slice(0, 2).join('/')}`;
  return glob.sync(`**/${testsFile}`, { cwd: parentFolder }).length > 0;
}

function checkFiles(files) {
  const missingTests = [];
  files.forEach((file) => {
    const isTestExists = checkIsTestExists(file);
    if (!isTestExists) {
      missingTests.push(`${srcPath}/${file}`);
    }
  });
  return missingTests;
}

function throwError(message) {
  console.error('\x1b[31m', message);
  process.exit(1);
}

if (srcPath && excludedFilesString) {
  const excludedFiles = excludedFilesString.split(',');
  const tsxFiles = findTSXFiles(srcPath, excludedFiles);
  const missingTests = checkFiles(tsxFiles);
  if (missingTests.length > 0) {
    throwError(`Missing tests for the following components:\n - ${missingTests.join('\n - ')}`);
  }
  process.exit(0);
} else {
  throwError('Add SRC_PATH and TESTS_EXCLUDED_FILES to .env file!');
}
