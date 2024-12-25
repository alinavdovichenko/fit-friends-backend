import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { useAppSelector } from '../../hooks';
import { isAuthRequesting, isUserAuth } from '../../store';
import Preloader from '../preloader/preloader';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): React.JSX.Element {
  const isAuth = useAppSelector(isUserAuth);
  const isRequesting = useAppSelector(isAuthRequesting);
  if (isRequesting) {
    return <Preloader />;
  }
  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
