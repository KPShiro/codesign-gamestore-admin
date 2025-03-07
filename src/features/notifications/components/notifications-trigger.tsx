import { OutlinedButton, TonalButton } from '@/components/button';
import Popover from '@/components/popover/popover';
import { cn } from '@/utils';
import { useNotificationsContext } from '@features/notifications/hooks/use-notifications-context';
import { BellDotIcon, BellIcon } from 'lucide-react';
import { useState } from 'react';
import NotificationsList from './notifications-list';

const NotificationsTrigger = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const { notifications, markAllAsRead } = useNotificationsContext();
    const unreadNotifications = notifications.filter((notification) => !notification.isRead);
    const hasNotifications = unreadNotifications.length > 0;

    return (
        <Popover onOpenChange={setOpened}>
            <Popover.Trigger asChild>
                {hasNotifications ? (
                    <TonalButton
                        icon={hasNotifications ? BellDotIcon : BellIcon}
                        className={cn(hasNotifications && !opened && 'animate-ping-ring')}
                    />
                ) : (
                    <OutlinedButton
                        icon={hasNotifications ? BellDotIcon : BellIcon}
                        className={cn(hasNotifications && !opened && 'animate-ping-ring')}
                    />
                )}
            </Popover.Trigger>
            <Popover.Content className="w-96 select-none">
                <div className="flex items-center justify-between border-b p-4">
                    <h4 className="text-sm font-medium">Notifications</h4>
                    <OutlinedButton
                        size="xs"
                        text="Mark all as read"
                        disabled={!hasNotifications}
                        onClick={markAllAsRead}
                    />
                </div>
                <NotificationsList notifications={notifications} />
            </Popover.Content>
        </Popover>
    );
};

export default NotificationsTrigger;
