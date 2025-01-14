import { render } from '../../../../__tests__/test-utils';
import Grid from '../Grid';

describe('<Grid />', () => {
  test('should render component', async () => {
    const { asFragment } = render(<Grid />);
    expect(asFragment()).toMatchSnapshot();
  });
});
