import { cn, formatDateTime } from '@/utils';
import Icon from '@components/ui/icon';
import { Notification } from '@features/notifications/hooks/use-notifications-context';
import { UserIcon } from 'lucide-react';

type NotificationProps = {
    notification: Notification;
};

const NotificationCard = ({ notification }: NotificationProps) => {
    return (
        <div
            className={cn(
                'relative flex cursor-default gap-4 rounded-sm border border-transparent p-3 text-xs',
                notification.isRead
                    ? 'opacity-50 hover:bg-foreground/5 hover:opacity-100'
                    : 'border-primary/5 bg-primary/5'
            )}
        >
            <div className="flex size-9 flex-shrink-0 flex-grow-0 items-center justify-center rounded-full border bg-foreground/5">
                <Icon icon={UserIcon} size={14} className="text-muted-foreground" />
            </div>
            <div className="flex flex-col gap-3">
                <div className="space-y-1">
                    <h5>{notification.title}</h5>
                    <h6 className="text-muted-foreground">
                        {formatDateTime(notification.timestamp)}
                    </h6>
                </div>
                {notification.description ? (
                    <div className="rounded-sm border border-dashed bg-card p-4 text-muted-foreground">
                        <p>{notification.description}</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default NotificationCard;

