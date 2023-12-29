import { renderHook, act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';

// Hooks
import { useNotification } from '@app/hooks';

// Constants
import { NOTIFICATION_LIST } from '@app/constants';

describe('useNotification', () => {
  it('should correctly calculate quantity and hasNewNotification', () => {
    const { result } = renderHook(() => useNotification(NOTIFICATION_LIST));

    expect(result.current.quantity).toBe(2);
    expect(result.current.hasNewNotification).toBe(true);
  });

  it('should handleDeleteNotice correctly', async () => {
    const { result } = renderHook(() => useNotification(NOTIFICATION_LIST));

    act(() => {
      result.current.handleDeleteNotice('2');
    });

    waitFor(() => expect(result.current.quantity).toBe(1));
    expect(result.current.hasNewNotification).toBe(true);
  });

  it('should handleUpdateMarkRead correctly', () => {
    const { result } = renderHook(() => useNotification(NOTIFICATION_LIST));

    act(() => {
      result.current.handleUpdateMarkRead('1');
    });

    waitFor(() => expect(result.current.quantity).toBe(1));
    expect(result.current.hasNewNotification).toBe(true);
  });
});
