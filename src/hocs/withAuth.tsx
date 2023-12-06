import { Navigate } from 'react-router-dom';
import { FunctionComponent } from 'react';

// Constants
import { EXPIRED_DAY, ROUTES } from '@constants/index';

// Hooks
import { useAuth, TUserInfo, TUseAuth } from '@hooks/index';

// Utils
import { getExpireTime, getCurrentTime } from '@utils/index';

/**
 * Requires you to log in to continue
 * @param Component Components need to be tested
 * @returns
 */
export const withNeedLogin = <TProps extends object>(
  Component: FunctionComponent<TProps>,
): FunctionComponent<TProps> => {
  const NewComponent = (props: TProps): JSX.Element => {
    const { isRemember, user, startDate, signOut } = useAuth(
      (
        state,
      ): {
        isRemember: boolean;
        startDate: number;
        user: TUserInfo;
        signOut: TUseAuth['signOut'];
      } => ({
        isRemember: state.isRemember,
        user: state.user,
        startDate: state.startDate,
        signOut: state.signOut,
      }),
    );
    const isExpired: boolean =
      getCurrentTime() / 1000 -
        getExpireTime(
          startDate / 1000,
          isRemember ? EXPIRED_DAY.REMEMBER : EXPIRED_DAY.NOT_REMEMBER,
        ) >=
      0;

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
