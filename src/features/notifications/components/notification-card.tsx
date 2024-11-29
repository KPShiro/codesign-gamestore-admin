import { formatDateTime } from '@/utils';
import Icon from '@components/ui/icon';
import { AppNotification } from '@features/notifications/hooks/use-notifications-context';
import { UserIcon } from 'lucide-react';

type NotificationProps = {
    notification: AppNotification;
};

const NotificationCard = ({ notification }: NotificationProps) => {
    return (
        <div className="flex cursor-default gap-4 rounded-sm p-3 text-xs hover:bg-foreground/5">
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
                        <p className="line-clamp-2">{notification.description}</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default NotificationCard;
