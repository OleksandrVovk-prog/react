import { getRandomColor } from '../utils/helpers';

export default {
  squares: [
    {
      id: Date.now(),
      x: 0,
      y: 0,
      color: getRandomColor(),
    },
  ],
  itemName: 'Eddie',
};
