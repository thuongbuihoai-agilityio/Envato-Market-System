import { Navigate, useLocation } from 'react-router-dom';
import { FunctionComponent } from 'react';

// Constants
import { PRIVATE_ROUTES, PUBLIC_ROUTES, ROUTES } from '@app/constants';

// Stores
import { TAuthStoreData, authStore } from '@app/stores';

type TValidateRoute = {
  id: number;
  path: string;
};

export const withAuthentication = <TProps extends object>(
  Component: FunctionComponent<TProps>,
): FunctionComponent<TProps> => {
  const NewComponent = (props: TProps): JSX.Element => {
    const { pathname } = useLocation();
    const user = authStore((state): TAuthStoreData['user'] => state.user);
    const isMatchPrivateRoute: boolean = PRIVATE_ROUTES.some(
      (route: TValidateRoute) =>
        pathname === ROUTES.ROOT || `/${route.path}` === pathname,
    );
    const hasUser: boolean = !!user;
    const isMatchPublicRoute: boolean = PUBLIC_ROUTES.some(
      (route: TValidateRoute) => `/${route.path}` === pathname,
    );

    if (isMatchPublicRoute && hasUser) {
      return <Navigate to={ROUTES.ROOT} replace />;
    }

    if (isMatchPrivateRoute && !hasUser) {
      return <Navigate to={ROUTES.LOGIN} />;
    }

    return <Component {...props} />;
  };

  return NewComponent;
};
