/* eslint-disable quotes */
import { act, renderHook } from '@testing-library/react';
import { StorageValue } from 'zustand/middleware';

// Stores
import { TAuthStoreAction, TAuthStoreData, authStore } from '..';

// Constants
import { STORE_KEY } from '@app/constants';

// Utils
import { getValueFromLocalStore } from '@app/utils';

const MOCK_USER_DATA = {
  user: {
    firstName: 'Duong',
    lastName: 'Pham',
    email: 'duong.pham2@asnet.com.vn',
    creatAt: 1703059988,
    avatarURL: '/images/avatar-sign-up.webp',
    phoneNumber: 'phoneNumber 20',
    country: 'country 20',
    postalCode: 'postalCode 20',
    facebookURL: 'facebookURL 20',
    twitterURL: 'twitterURL 20',
    linkedinURL: 'linkedinURL 20',
    youtubeURL: 'youtubeURL 20',
    id: '20',
    createdAt: 1703061187583,
  },
  isRemember: false,
  date: 1703210585.219,
};

const setup = () =>
  renderHook<TAuthStoreData & TAuthStoreAction, unknown>(authStore);

describe('Authentication store', () => {
  it("Hasn't user", () => {
    const { result } = setup();

    expect(result.current.user).toBeFalsy();
  });

  it('Add user', async () => {
    const {
      result: { current },
    } = setup();

    await act(() => {
      current.updateStore(MOCK_USER_DATA as unknown as TAuthStoreData);
    });

    const {
      state: { user },
    }: StorageValue<TAuthStoreData & TAuthStoreAction> = JSON.parse(
      getValueFromLocalStore(STORE_KEY.AUTH),
    );

    expect(user).not.toBe(null);
  });

  it('Update user', async () => {
    const {
      result: { current },
    } = setup();

    await act(() => {
      current.updateStore(MOCK_USER_DATA as unknown as TAuthStoreData);
    });
    expect(current.user).not.toBe(null);

    const {
      state: { user: userBeforeUpdate },
    }: StorageValue<TAuthStoreData> = JSON.parse(
      getValueFromLocalStore(STORE_KEY.AUTH),
    );

    expect(userBeforeUpdate).toEqual(MOCK_USER_DATA.user);

    const updateUser: TAuthStoreData = {
      ...MOCK_USER_DATA,
      user: {
        ...MOCK_USER_DATA.user,
        firstName: 'Duong 1',
        lastName: 'Pham 2',
      },
    } as unknown as TAuthStoreData;
    await act(() => {
      current.updateStore(updateUser);
    });
    const {
      state: { user: userAfterUpdate },
    }: StorageValue<TAuthStoreData> = JSON.parse(
      getValueFromLocalStore(STORE_KEY.AUTH),
    );

    expect(userAfterUpdate).not.toEqual(null);
    expect(userAfterUpdate).toEqual(updateUser.user);
  });

  it('Clear store', async () => {
    const {
      result: { current },
    } = setup();

    await act(() => {
      current.updateStore(MOCK_USER_DATA as unknown as TAuthStoreData);
    });
    expect(current.user).not.toBe(null);

    const {
      state: { user: user },
    }: StorageValue<TAuthStoreData> = JSON.parse(
      getValueFromLocalStore(STORE_KEY.AUTH),
    );

    expect(user).toEqual(MOCK_USER_DATA.user);

    await act(() => {
      current.clearStore();
    });

    expect(user).not.toEqual(null);
    expect(getValueFromLocalStore(STORE_KEY.AUTH)).toBeFalsy();
  });
});
