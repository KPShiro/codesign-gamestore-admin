import NotificationCard from '@features/notifications/components/notification-card';
import { AppNotification } from '@features/notifications/hooks/use-notifications-context';

type NotificationsListProps = {
    notifications: AppNotification[];
};

const NotificationsList = ({ notifications }: NotificationsListProps) => {
    return (
        <div className="flex flex-col gap-2 p-1">
            {notifications.length === 0 ? (
                <div className="p-4 text-center">
                    <span className="text-sm text-muted-foreground">
                        All notifications were read
                    </span>
                </div>
            ) : null}
            {notifications.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
            ))}
        </div>
    );
};

export default NotificationsList;
