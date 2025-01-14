import { type ReactElement, useEffect } from 'react';
import Draggable from 'react-draggable';
import { toast, ToastContainer } from 'react-toastify';

import { GRID_HEIGHT, GRID_WIDTH } from '../../constants/Grid';
import { getContrastColor } from '../../utils/helpers';

import type { IGridView } from './interfaces/IGridView';

import styles from './sass/GridView.module.scss';

function GridView({
  squares,
  contextMenu,
  onHandleRightClick,
  onHandleCreateSquare,
  onHideContextMenu,
  errorMessage,
  setErrorMessage,
  handleDragStop,
  handleDrag,
}: IGridView): ReactElement {
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        onClose: () => {
          setErrorMessage('');
        },
      });
    }
  }, [errorMessage]);

  return (
    <div
      aria-hidden
      className={styles.gridContainer}
      onClick={onHideContextMenu}
      onContextMenu={onHandleRightClick}
      style={{ backgroundSize: `${GRID_WIDTH}px ${GRID_HEIGHT}px` }}
    >
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {contextMenu ? (
        <div
          className={styles.gridContextMenu}
          style={{
            top: contextMenu.y,
            left: contextMenu.x,
          }}
        >
          <div aria-hidden onClick={onHandleCreateSquare}>
            Create Square
          </div>
        </div>
      ) : null}
      {squares?.map((square) => (
        <Draggable
          key={square.id}
          defaultPosition={{ x: square.x, y: square.y }}
          position={{ x: square.x, y: square.y }}
          grid={[GRID_WIDTH, GRID_HEIGHT]}
          onStop={(e, data) => handleDragStop(square.id, e, data)}
          onDrag={(e, data) => handleDrag(square.id, e, data)}
        >
          <div
            className={styles.gridItem}
            style={{
              width: GRID_WIDTH,
              height: GRID_HEIGHT,
              backgroundColor: square.color,
              color: getContrastColor(square.color),
            }}
          >
            Eddie
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default GridView;
