import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../../__tests__/test-utils';
import { initServer } from '../../../../__tests__/mswServer';
import joke from '../../../mocks/joke';
import { testIdLoader } from '../../../constants/TestId';

import HomeView from '../HomeView';

describe('<HomeView />', () => {
  initServer();
  test('should render component', async () => {
    const { asFragment } = render(<HomeView />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render content after loading', async () => {
    render(<HomeView />);
    expect(screen.getByTestId(testIdLoader)).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId(testIdLoader)).not.toBeInTheDocument());
    expect(screen.getByText(joke.value)).toBeInTheDocument();
  });
});
