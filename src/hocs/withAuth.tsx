import { Navigate } from 'react-router-dom';
import { FunctionComponent } from 'react';

// Constants
import { ROUTES } from '@constants/routers';

// Hooks
import { useAuth } from '@hooks/useAuth';

// Types
import { TUser } from '@interfaces/user';

type TUserStore = Omit<TUser, 'password'> | null;

/**
 * Requires you to log in to continue
 * @param Component Components need to be tested
 * @returns
 */
export const withNeedLogin = <TProps extends object>(
  Component: FunctionComponent<TProps>,
): FunctionComponent<TProps> => {
  const NewComponent = (props: TProps): JSX.Element => {
    const user = useAuth((state): TUserStore => state.user);

    if (!user) return <Navigate to={ROUTES.LOGIN} />;

    return <Component {...props} />;
  };

  return NewComponent;
};

/**
 * Access is not allowed after logging in
 * @param Component Components need to be tested
 * @returns
 */
export const withLogged = <TProps extends object>(
  Component: FunctionComponent<TProps>,
): FunctionComponent<TProps> => {
  const NewComponent = (props: TProps): JSX.Element => {
    const user = useAuth((state): TUserStore => state.user);

    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return <Component {...props} />;
  };

  return NewComponent;
};
