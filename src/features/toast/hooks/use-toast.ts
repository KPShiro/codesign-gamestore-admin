import { useToastContext } from './use-toast-context';

export const useToast = () => {
    const context = useToastContext();

    return {
        show: context.show,
    };
};
