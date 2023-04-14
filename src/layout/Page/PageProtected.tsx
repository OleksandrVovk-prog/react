import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/useApp';
import { selectUserId } from '../../store/slices/auth/selectors';
import Page from './Page';

import IPageProtected from './interfaces/IPageProtected';

function PageProtected({ redirectUri }: IPageProtected): JSX.Element {
  const id = useAppSelector(selectUserId);
  return id ? (
    <Page />
  ) : (
    <Navigate to={redirectUri} />
  );
}

export default PageProtected;
