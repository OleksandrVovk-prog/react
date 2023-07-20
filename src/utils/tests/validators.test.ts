import { loginSchema, editProfileSchema } from '../validators';
import user, { userCredentials } from '../../mocks/user';

describe('validators', () => {
  test('loginSchema is valid', async () => {
    const isValid = await loginSchema.isValid(userCredentials);
    expect(isValid).toBe(true);
  });
  test('editProfileSchema  is valid', async () => {
    const validObject = { firstName: user.firstName, lastName: user.lastName };
    const isValid = await editProfileSchema.isValid(validObject);
    expect(isValid).toBe(true);
  });
});
