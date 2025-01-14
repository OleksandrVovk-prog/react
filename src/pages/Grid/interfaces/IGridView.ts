import type { DraggableData, DraggableEvent } from 'react-draggable';
import type { IContextMenu } from './IContextMenu';
import type { ISquare } from './ISquare';

export interface IGridView {
  squares: ISquare[],
  contextMenu: IContextMenu | null,
  onHandleRightClick: (event: React.MouseEvent<HTMLDivElement>) => void,
  onHandleCreateSquare: () => void,
  onHideContextMenu: () => void,
  errorMessage?: string,
  setErrorMessage: (errorMessage: string) => void,
  handleDragStop: (id: number, e: DraggableEvent, data: DraggableData) => void,
  handleDrag: (id: number, e: DraggableEvent, data: DraggableData) => void,
}
