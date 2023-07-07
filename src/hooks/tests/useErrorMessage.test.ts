import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import { renderHook } from '../../../__tests__/test-utils';
import useErrorMessage from '../useErrorMessage';
import i18n from '../../i18n';

describe('useErrorMessage', () => {
  test('should return default error message', () => {
    const { result } = renderHook<string, FetchBaseQueryError | SerializedError | undefined>(useErrorMessage);
    expect(result.current).toBe(i18n.t('common.unknownError'));
  });
});
