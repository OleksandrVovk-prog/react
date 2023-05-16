import { BrowserRouter } from 'react-router-dom';

function Preview(Story): JSX.Element {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
}

export default Preview;
