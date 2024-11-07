import * as RadixToast from '@radix-ui/react-toast';
import { useCallback, useState } from 'react';
import { ShowToastConfig, ToastContext } from '../hooks/use-toast-context';
import Toast from './toast';

type ToastProviderProps = RadixToast.ToastProviderProps;

const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
    const [toasts, setToasts] = useState<ShowToastConfig[]>([]);

    const handleShow = useCallback((toast: ShowToastConfig) => {
        setToasts((toasts) => [...toasts, toast]);
    }, []);

    return (
        <RadixToast.Provider {...props}>
            <ToastContext.Provider value={{ show: handleShow }}>
                {children}
                {toasts.map((toast, index) => (
                    <Toast key={index} config={toast} />
                ))}
                <RadixToast.Viewport className="fixed bottom-0 right-0 z-[9999] flex max-w-sm flex-col gap-2 p-6" />
            </ToastContext.Provider>
        </RadixToast.Provider>
    );
};

export default ToastProvider;
