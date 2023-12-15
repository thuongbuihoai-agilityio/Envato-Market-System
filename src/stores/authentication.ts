import { create } from 'zustand';
import { StorageValue, createJSONStorage, persist } from 'zustand/middleware';

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

export const authStore = create(
  persist<TAuthStoreData & TAuthStoreAction>(
    (set) => {
      const initData: TAuthStoreData = {
        user: null,
        isRemember: false,
        date: 0,
      };

      return {
        ...initData,
        updateStore: (data: Partial<TAuthStoreData>) => set(data),
        clearStore: () => set(initData),
      };
    },
    {
      name: STORE_KEY.AUTH,
      storage: createJSONStorage(() => ({
        setItem: (key: string, value: string) => {
          const {
            state: { user },
          }: StorageValue<TAuthStoreData & TAuthStoreAction> =
            JSON.parse(value);

          if (user) {
            localStorage.setItem(key, value);
          }
        },
        getItem: localStorage.getItem.bind(localStorage),
        removeItem: localStorage.removeItem.bind(localStorage),
      })),
    },
  ),
);
