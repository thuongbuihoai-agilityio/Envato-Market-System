import { Navigate } from 'react-router-dom';
import { FunctionComponent } from 'react';

// Constants
import { EXPIRED_DAY, ROUTES } from '@app/constants';

// Hooks
import { useAuth, TUserInfo, TUseAuth } from '@app/hooks';

// Utils
import { getExpireTime, getCurrentTimeSeconds } from '@app/utils';

/**
 * Requires you to log in to continue
 * @param Component Components need to be tested
 * @returns
 */
export const withNeedLogin = <TProps extends object>(
  Component: FunctionComponent<TProps>,
): FunctionComponent<TProps> => {
  const NewComponent = (props: TProps): JSX.Element => {
    const { isRemember, user, date, signOut } = useAuth(
      (
        state,
      ): {
        isRemember: boolean;
        date: number;
        user: TUserInfo;
        signOut: TUseAuth['signOut'];
      } => ({
        isRemember: state.isRemember,
        user: state.user,
        date: state.date,
        signOut: state.signOut,
      }),
    );
    const expiredTime: number = getExpireTime(
      date,
      isRemember ? EXPIRED_DAY.REMEMBER : EXPIRED_DAY.NOT_REMEMBER,
    );
    const isExpired: boolean = expiredTime - getCurrentTimeSeconds() < 0;

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
