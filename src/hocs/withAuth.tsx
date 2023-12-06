import { Navigate } from 'react-router-dom';
import { FunctionComponent } from 'react';

// Constants
import { ROUTES } from '@constants/index';

// Hooks
import { useAuth, TUserInfo, TUseAuth } from '@hooks/index';

// Utils
import { getCurrentTime } from '@utils/index';

/**
 * Requires you to log in to continue
 * @param Component Components need to be tested
 * @returns
 */
export const withNeedLogin = <TProps extends object>(
  Component: FunctionComponent<TProps>,
): FunctionComponent<TProps> => {
  const NewComponent = (props: TProps): JSX.Element => {
    const { user, expiredTime, signOut } = useAuth(
      (
        state,
      ): {
        user: TUserInfo;
        expiredTime: number;
        signOut: TUseAuth['signOut'];
      } => ({
        user: state.user,
        expiredTime: state.expiredTime,
        signOut: state.signOut,
      }),
    );
    const isExpired: boolean = getCurrentTime() - expiredTime >= 0;

    if (isExpired && user) {
      signOut();

      return <></>;
    }

    if (!user) {
      return <Navigate to={ROUTES.LOGIN} />;
    }

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
    const user = useAuth((state): TUserInfo => state.user);

    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return <Component {...props} />;
  };

  return NewComponent;
};
