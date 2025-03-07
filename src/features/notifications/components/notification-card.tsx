import { cn, formatDateTime } from '@/utils';
import { useNotifications } from '@features/notifications/hooks/use-notifications';
import { Notification } from '@features/notifications/hooks/use-notifications-context';

type NotificationProps = {
    notification: Notification;
};

const NotificationCard = ({ notification }: NotificationProps) => {
    const { markAsRead } = useNotifications();

    const handleMarkAsRead = () => {
        if (notification.isRead) {
            return;
        }

        markAsRead(notification.id);
    };

    return (
        <div
            onClick={handleMarkAsRead}
            className={cn(
                'flex cursor-default flex-col gap-3 rounded-sm p-3 text-sm',
                notification.isRead ? 'hover:bg-on-surface/5' : 'bg-primary/5 hover:bg-primary/10'
            )}
        >
            <div className="space-y-1">
                <h5 className={cn('font-medium', notification.isRead ? '' : 'text-primary')}>
                    {notification.title}
                </h5>
                <h6 className="text-on-surface/60 text-xs">
                    {formatDateTime(notification.timestamp)}
                </h6>
            </div>
            {notification.description ? (
                <div className="bg-surface text-on-surface/60 rounded-sm border border-dashed p-4">
                    <p className="line-clamp-2 text-xs">{notification.description}</p>
                </div>
            ) : null}
        </div>
    );
};

export default NotificationCard;
