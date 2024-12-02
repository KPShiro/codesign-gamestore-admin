import { randomizeId } from '@/utils';
import {
    AppNotification,
    Notification,
    NotificationsContext,
    NotificationsContextType,
} from '@features/notifications/hooks/use-notifications-context';
import { useCallback, useMemo, useState } from 'react';

const NotificationsProvider = ({ children }: React.PropsWithChildren) => {
    const [notifications, setNotifications] = useState<Notification[]>([
        {
            id: randomizeId(),
            author: 'Peter Parker',
            timestamp: new Date('2024-11-29T09:00:00').getTime(),
            isRead: true,
            title: (
                <>
                    <span className="font-bold text-foreground">The Witcher 3</span> was added to
                    the games catalog
                </>
            ),
        },
        {
            id: randomizeId(),
            author: 'Peter Parker',
            timestamp: new Date('2024-11-29T08:42:00').getTime(),
            isRead: true,
            title: (
                <>
                    <span className="font-bold text-foreground">The Witcher 3</span> was added to
                    the games catalog
                </>
            ),
        },
        {
            id: randomizeId(),
            author: 'Peter Parker',
            timestamp: new Date('2024-11-29T10:00:00').getTime(),
            isRead: false,
            title: (
                <>
                    <span className="font-bold text-foreground">The Sims</span> was added to the
                    games catalog
                </>
            ),
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor totam temporibus, consectetur quis eum commodi cum eaque earum. Optio iusto beatae a, provident voluptatibus magni magnam ex? Praesentium, suscipit molestias?',
        },
    ]);

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

