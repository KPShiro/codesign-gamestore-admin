import { useNotificationsContext } from './use-notifications-context';

export const useNotifications = () => {
    const { add } = useNotificationsContext();

    return {
        add,
    };
};
