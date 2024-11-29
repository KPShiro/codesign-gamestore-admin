import { randomizeId } from '@/utils';
import {
    AppNotification,
    NotificationsContext,
    NotificationsContextType,
} from '@features/notifications/hooks/use-notifications-context';
import { useCallback, useMemo, useState } from 'react';

const NotificationsProvider = ({ children }: React.PropsWithChildren) => {
    const [notifications, setNotifications] = useState<AppNotification[]>([]);

    const add = useCallback(
        (notification: Omit<AppNotification, 'id' | 'timestamp' | 'isRead'>) => {
            setNotifications((currentNotifications) => [
                ...currentNotifications,
                {
                    id: randomizeId(),
                    timestamp: Date.now(),
                    isRead: false,
                    ...notification,
                },
            ]);
        },
        []
    );

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
            markAllAsRead,
        }),
        [notifications]
    );

    return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
};

export default NotificationsProvider;
