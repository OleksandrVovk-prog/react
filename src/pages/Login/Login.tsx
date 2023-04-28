import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/useApp';
import LoginView from './LoginView';
import { selectUserId } from '../../store/slices/auth/selectors';

function Login(): JSX.Element {
  const id = useAppSelector(selectUserId);
  return id ? (
    <Navigate to="/" />
  ) : (
    <LoginView />
  );
}

export default Login;