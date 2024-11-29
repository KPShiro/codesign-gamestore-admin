import Icon from '@/components/ui/icon';
import { cn } from '@/utils';
import Button from '@components/ui/button';
import Popover from '@components/ui/popover';
import { useNotificationsContext } from '@features/notifications/hooks/use-notifications-context';
import { InboxIcon } from 'lucide-react';
import NotificationsList from './notifications-list';

const NotificationsTrigger = () => {
    const { notifications, markAllAsRead } = useNotificationsContext();
    const hasNotifications = notifications.length > 0;
    const unreadNotifications = notifications.filter((notification) => !notification.isRead);

    return (
        <Popover>
            <Popover.Trigger
                className={cn(
                    'disabled:opacity-disabled flex h-10 items-center justify-center gap-2 rounded border',
                    hasNotifications ? 'px-4' : 'aspect-square'
                )}
            >
                <Icon icon={InboxIcon} />
                {hasNotifications ? (
                    <span className="text-sm font-semibold">
                        {unreadNotifications.length} unread
                    </span>
                ) : null}
            </Popover.Trigger>
            <Popover.Content className="w-96 select-none">
                <div className="flex items-center justify-between border-b p-4">
                    <h4 className="text-sm font-medium">Notifications</h4>
                    <Button
                        variant={'outlined'}
                        size={'xs'}
                        text="Mark all as read"
                        disabled={notifications.length === 0}
                        onClick={markAllAsRead}
                    />
                </div>
                <NotificationsList notifications={unreadNotifications} />
            </Popover.Content>
        </Popover>
    );
};

export default NotificationsTrigger;
