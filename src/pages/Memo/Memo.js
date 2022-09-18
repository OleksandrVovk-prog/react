import { useState } from 'react';
import MemoView from './MemoView';

export default function Memo() {
  const [clickCounter, setClickCounter] = useState(0);
  const [title, setTitle] = useState('John Carter');
  const [production] = useState('Walt Disney Pictures');
  const [poster] = useState('https://m.media-amazon.com/images/M/MV5BMDEwZmIzNjYtNjUwNS00MzgzLWJiO'
  + 'GYtZWMxZGQ5NDcxZjUwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg');

  const handleClick = () => {
    setClickCounter((count) => count + 1);
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <MemoView
      title={title}
      production={production}
      poster={poster}
      clickCounter={clickCounter}
      handleClick={handleClick}
      changeTitle={changeTitle}
    />
  );
}
