import { StorageValue, createJSONStorage, persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

// Constants
import { EXPIRED_DAY, STORE_KEY } from '@app/constants';

// Types
import { TUserDetail } from '@app/interfaces';

// Utils
import {
  convertToString,
  getCurrentTimeSeconds,
  getExpireTime,
  getValueFromLocalStore,
} from '@app/utils';

export type TUserInfo = Omit<TUserDetail, 'password'> | null;
export type TAuthStoreData = {
  user: TUserInfo | null;
  isRemember: boolean;
  date: number;
};
export type TAuthStoreAction = {
  updateStore: (data: Partial<TAuthStoreData>) => void;
  clearStore: () => void;
};

const DEFAULT_VALUE = {
  user: null,
  isRemember: false,
  date: 0,
};

export const authStore = createWithEqualityFn(
  persist<TAuthStoreData & TAuthStoreAction>(
    (set) => ({
      ...DEFAULT_VALUE,
      updateStore: (data: Partial<TAuthStoreData>) => set(data),
      clearStore: () => set(DEFAULT_VALUE),
    }),
    {
      name: STORE_KEY.AUTH,
      storage: createJSONStorage(() => ({
        setItem: (key: string, value: string) => {
          const {
            state: { user },
          }: StorageValue<TAuthStoreData & TAuthStoreAction> =
            JSON.parse(value);

          const hasUser: boolean = !!user;

          if (hasUser) {
            return localStorage.setItem(key, value);
          }

          return localStorage.removeItem(key);
        },
        getItem: (key: string) => {
          const response: string = getValueFromLocalStore(key);
          const defaultValue: string = convertToString(DEFAULT_VALUE);

          if (response) {
            const {
              state: { user, date, isRemember },
            }: StorageValue<TAuthStoreData & TAuthStoreAction> =
              JSON.parse(response);

            const expiredTime: number = getExpireTime(
              date,
              isRemember ? EXPIRED_DAY.REMEMBER : EXPIRED_DAY.NOT_REMEMBER,
            );

            const isExpired: boolean =
              expiredTime - getCurrentTimeSeconds() < 0;

            if (isExpired && user) return defaultValue;

            return response;
          }

          return defaultValue;
        },
        removeItem: localStorage.removeItem.bind(localStorage),
      })),
    },
  ),
);
