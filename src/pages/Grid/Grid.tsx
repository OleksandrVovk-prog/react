import React, { useState } from 'react';

import { GRID_HEIGHT, GRID_WIDTH } from '../../constants/Grid';
import { getItemSize, getRandomColor } from '../../utils/helpers';
import GridView from './GridView';

import type { ReactElement } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import type { IContextMenu } from './interfaces/IContextMenu';
import type { ISquare } from './interfaces/ISquare';
import type { ISquareLastPosition } from './interfaces/ISquareLastPosition';

function Grid(): ReactElement {
  const [squares, setSquares] = useState<ISquare[]>([]);
  const [contextMenu, setContextMenu] = useState<IContextMenu | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [lastPositionMoved, setLastPositionMoved] = useState<ISquareLastPosition | null>(null);

  const onHideContextMenu = () => {
    setContextMenu(null);
  };

  const onHandleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  // eslint-disable-next-line arrow-body-style
  const checkCollision = (id: number, newX: number, newY: number): boolean => {
    return squares.some((square) => square.id !== id && square.x === newX && square.y === newY);
  };

  const onHandleCreateSquare = () => {
    if (contextMenu) {
      const xAxis = getItemSize(contextMenu.x, GRID_WIDTH);
      const yAxis = getItemSize(contextMenu.y, GRID_HEIGHT);
      const isAlreadyAdded = squares.some((square) => square.x === xAxis && square.y === yAxis);
      if (!isAlreadyAdded) {
        setSquares([...squares, {
          id: Date.now(), x: xAxis, y: yAxis, color: getRandomColor(),
        }]);
        setContextMenu(null);
      } else {
        setErrorMessage('Square already exists');
        setContextMenu(null);
      }
    }
  };

  const handleDragStop = (id: number, e: DraggableEvent, data: DraggableData) => {
    const newX = getItemSize(data.x, GRID_WIDTH);
    const newY = getItemSize(data.y, GRID_HEIGHT);
    if (checkCollision(id, newX, newY)) {
      if (id === lastPositionMoved?.id) {
        setSquares((prev) => prev.map(
          (sq) => (sq.id === id ? { ...sq, x: lastPositionMoved.lastX, y: lastPositionMoved.lastY } : sq),
        ));
      }
      setErrorMessage('Square in this position already exists');
    } else {
      setSquares((prev) => prev.map((sq) => (sq.id === id ? { ...sq, x: newX, y: newY } : sq)));
    }
    setLastPositionMoved(null);
  };

  const handleDrag = (id: number, e: DraggableEvent, data: DraggableData) => {
    const { lastX, lastY } = data;
    setLastPositionMoved({ id, lastX, lastY });
  };

  return (
    <GridView
      squares={squares}
      contextMenu={contextMenu}
      onHandleRightClick={onHandleRightClick}
      onHandleCreateSquare={onHandleCreateSquare}
      onHideContextMenu={onHideContextMenu}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
      handleDragStop={handleDragStop}
      handleDrag={handleDrag}
    />
  );
}

export default Grid;
