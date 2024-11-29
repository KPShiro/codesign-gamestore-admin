import { isNotDefined } from '@/utils';
import { createContext, ReactNode, useContext } from 'react';

type AppNotification = {
    id: string;
    author: string;
    title: ReactNode;
    description?: ReactNode;
    timestamp: number;
    isRead: boolean;
};

type NotificationsContextType = {
    notifications: AppNotification[];
    add: (notification: Omit<AppNotification, 'id' | 'timestamp' | 'isRead'>) => void;
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
    type NotificationsContextType,
};
