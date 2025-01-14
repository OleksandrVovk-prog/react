import { getContrastColor, getItemSize, getRandomColor } from '../helpers';

describe('helpers', () => {
  test('getRandomColor is working', async () => {
    const color = getRandomColor();
    expect(color).toMatch(/^#[0-9A-F]{6}$/);
  });

  test('getItemSize is working', async () => {
    const size = 50;
    const contexPosition = 320;
    const expected = 300;
    const result = getItemSize(contexPosition, size);
    expect(result).toBe(expected);
  });

  test('getContrastColor is working', async () => {
    const hexColor = '#FFFFFF';
    const expected = '#000000';
    const result = getContrastColor(hexColor);
    expect(result).toBe(expected);
  });
});
