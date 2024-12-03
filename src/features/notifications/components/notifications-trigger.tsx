import Button from '@components/ui/button';
import Popover from '@components/ui/popover';
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
                <Button
                    variant={hasNotifications ? 'tonal' : 'outlined'}
                    icon={hasNotifications ? BellDotIcon : BellIcon}
                    ping={hasNotifications && !opened}
                />
            </Popover.Trigger>
            <Popover.Content className="w-96 select-none">
                <div className="flex items-center justify-between border-b p-4">
                    <h4 className="text-sm font-medium">Notifications</h4>
                    <Button
                        variant={'outlined'}
                        size={'sm'}
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
