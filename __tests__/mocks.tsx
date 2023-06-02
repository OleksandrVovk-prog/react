import { mockedNavigateId } from './constants';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <div data-testid={mockedNavigateId} />,
}));
