import Button from '@/components/ui/button';
import { cn, formatDateTime } from '@/utils';
import { useNotifications } from '@features/notifications/hooks/use-notifications';
import { Notification } from '@features/notifications/hooks/use-notifications-context';
import { CheckIcon } from 'lucide-react';

type NotificationProps = {
    notification: Notification;
};

const NotificationCard = ({ notification }: NotificationProps) => {
    const { markAsRead } = useNotifications();

    return (
        <div
            className={cn(
                'group relative isolate flex cursor-default gap-4 rounded-sm border border-transparent p-3 text-sm',
                notification.isRead ? 'hover:bg-foreground/5' : 'bg-primary/5'
            )}
        >
            <div className="absolute -top-4 right-3 z-10 hidden space-x-0.5 rounded-sm border bg-background p-0.5 shadow group-hover:block">
                <Button
                    size={'xs'}
                    variant={'text'}
                    icon={CheckIcon}
                    title="Mark as read"
                    onClick={() => markAsRead(notification.id)}
                    disabled={notification.isRead}
                />
            </div>
            <div className="flex flex-col gap-3">
                <div className="space-y-1">
                    <h5>{notification.title}</h5>
                    <h6 className="text-xs text-muted-foreground">
                        {formatDateTime(notification.timestamp)}
                    </h6>
                </div>
                {notification.description ? (
                    <div className="rounded-sm border border-dashed bg-background p-4 text-muted-foreground">
                        <p className="line-clamp-2">{notification.description}</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default NotificationCard;
