import { StorageValue, createJSONStorage, persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

// Constants
import { STORE_KEY } from '@app/constants';

// Types
import { TUserDetail } from '@app/interfaces';

export type TUserInfo = Omit<TUserDetail, 'password'> | null;
export type TAuthStoreData = {
  user: TUserInfo | null;
  isRemember: boolean;
  date: number;
};
type TAuthStoreAction = {
  updateStore: (data: Partial<TAuthStoreData>) => void;
  clearStore: () => void;
};

export const authStore = createWithEqualityFn(
  persist<TAuthStoreData & TAuthStoreAction>(
    (set) => ({
      user: null,
      isRemember: false,
      date: 0,
      updateStore: (data: Partial<TAuthStoreData>) => set(data),
      clearStore: () => set({ user: null }),
    }),
    {
      name: STORE_KEY.AUTH,
      storage: createJSONStorage(() => ({
        setItem: (key: string, value: string) => {
          const {
            state: { user },
          }: StorageValue<TAuthStoreData & TAuthStoreAction> =
            JSON.parse(value);

          if (user) {
            return localStorage.setItem(key, value);
          }

          return localStorage.removeItem(key);
        },
        getItem: localStorage.getItem.bind(localStorage),
        removeItem: localStorage.removeItem.bind(localStorage),
      })),
    },
  ),
);
