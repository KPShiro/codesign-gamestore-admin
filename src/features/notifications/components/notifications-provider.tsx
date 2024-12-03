import { randomizeId } from '@/utils';
import {
    AppNotification,
    Notification,
    NotificationsContext,
    NotificationsContextType,
} from '@features/notifications/hooks/use-notifications-context';
import { useCallback, useMemo, useState } from 'react';

const NotificationsProvider = ({ children }: React.PropsWithChildren) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const add = useCallback((notification: AppNotification) => {
        setNotifications((currentNotifications) => [
            ...currentNotifications,
            {
                id: randomizeId(),
                // TODO: Get logged in user name
                author: 'Peter Parker',
                timestamp: Date.now(),
                isRead: false,
                ...notification,
            },
        ]);
    }, []);

    const remove = useCallback((id: Notification['id']) => {
        setNotifications((notifications) => [
            ...notifications.filter((notification) => notification.id !== id),
        ]);
    }, []);

    const markAsRead = useCallback((id: Notification['id']) => {
        setNotifications((notifications) => [
            ...notifications.map((notification) => {
                if (notification.id !== id) {
                    return notification;
                }

                return {
                    ...notification,
                    isRead: true,
                };
            }),
        ]);
    }, []);

    const markAllAsRead = useCallback(() => {
        setNotifications((notifications) => [
            ...notifications.map((notification) => ({
                ...notification,
                isRead: true,
            })),
        ]);
    }, []);

    const value = useMemo<NotificationsContextType>(
        () => ({
            notifications,
            add,
            remove,
            markAsRead,
            markAllAsRead,
        }),
        [notifications]
    );

    return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
};

export default NotificationsProvider;
