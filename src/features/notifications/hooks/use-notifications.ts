import { useNotificationsContext } from './use-notifications-context';

export const useNotifications = () => {
    const { add, markAsRead, markAllAsRead } = useNotificationsContext();

    return {
        add,
        markAsRead,
        markAllAsRead,
    };
};
