import { screen } from '@testing-library/react';

import { initServer } from '../../../../__tests__/mswServer';
import { render } from '../../../../__tests__/test-utils';
import grid from '../../../mocks/grid';
import GridView from '../GridView';

describe('<GridView />', () => {
  initServer();
  test('should render component', async () => {
    const { asFragment } = render(
      <GridView
        squares={grid.squares}
        contextMenu={null}
        onHandleRightClick={() => {}}
        onHandleCreateSquare={() => {}}
        onHideContextMenu={() => {}}
        errorMessage=""
        setErrorMessage={() => {}}
        handleDragStop={() => {}}
        handleDrag={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render content after loading', async () => {
    render(
      <GridView
        squares={grid.squares}
        contextMenu={null}
        onHandleRightClick={() => {}}
        onHandleCreateSquare={() => {}}
        onHideContextMenu={() => {}}
        errorMessage=""
        setErrorMessage={() => {}}
        handleDragStop={() => {}}
        handleDrag={() => {}}
      />,
    );
    expect(screen.getByText(grid.itemName)).toBeInTheDocument();
  });
});
