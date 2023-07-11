import { loginSchema, editProfileSchema } from '../validators';

describe('validators', () => {
  test('loginSchema is valid', async () => {
    const validObject = { password: '123', username: 'John' };
    const isValid = await loginSchema.isValid(validObject);
    expect(isValid).toBe(true);
  });
  test('editProfileSchema  is valid', async () => {
    const validObject = { firstName: 'John', lastName: 'Doe' };
    const isValid = await editProfileSchema.isValid(validObject);
    expect(isValid).toBe(true);
  });
});
