import { isNotDefined } from '@/utils';
import { createContext, ReactNode, useContext } from 'react';

type AppNotification = {
    title: ReactNode | string;
    description?: ReactNode | string;
};

type Notification = AppNotification & {
    id: string;
    author: string;
    timestamp: number;
    isRead: boolean;
};

type NotificationsContextType = {
    notifications: Notification[];
    add: (notification: AppNotification) => void;
    markAllAsRead: () => void;
};

const NotificationsContext = createContext<NotificationsContextType | null>(null);

const useNotificationsContext = () => {
    const context = useContext(NotificationsContext);

    if (isNotDefined(context)) {
        throw new Error('Hook must be used within the NotificationsContext!');
    }

    return context;
};

export {
    NotificationsContext,
    useNotificationsContext,
    type AppNotification,
    type Notification,
    type NotificationsContextType,
};

