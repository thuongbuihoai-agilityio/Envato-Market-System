import { Notification } from '@app/interfaces';
import { useCallback } from 'react';

export const useNotification = (notifications: Notification[]) => {
  const { quantity, hasNewNotification } = notifications.reduce(
    (result, notification) => {
      if (!notification?.isMarkRead) {
        result.quantity += 1;
        result.hasNewNotification = true;
      }
      return result;
    },
    { quantity: 0, hasNewNotification: false },
  );

  const handleDeleteNotice = useCallback(
    (id: string) => notifications.filter((item) => item.id !== id),

    [notifications],
  );

  const handleUpdateMarkRead = (id: string) => {
    const notificationToUpdate = notifications.find(
      (notification) => notification.id === id,
    );
    if (notificationToUpdate) {
      notificationToUpdate.isMarkRead = true;
    }
  };

  return {
    quantity,
    hasNewNotification,
    handleDeleteNotice,
    handleUpdateMarkRead,
  };
};
