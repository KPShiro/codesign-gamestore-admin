import NotificationCard from '@features/notifications/components/notification-card';
import { Notification } from '@features/notifications/hooks/use-notifications-context';
import { useMemo } from 'react';

type NotificationsListProps = {
    notifications: Notification[];
};

const NotificationsList = ({ notifications }: NotificationsListProps) => {
    const sortedNotifications = useMemo(() => {
        return [...notifications].sort((a, b) => {
            return a.timestamp >= b.timestamp ? -1 : 1;
        });
    }, [notifications]);

    return (
        <div className="flex flex-col gap-1 p-1">
            {sortedNotifications.length === 0 ? (
                <div className="flex h-32 items-center justify-center text-center">
                    <span className="text-xs font-medium text-muted-foreground">
                        You don't have any notifications
                    </span>
                </div>
            ) : null}
            {sortedNotifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
            ))}
        </div>
    );
};

export default NotificationsList;
