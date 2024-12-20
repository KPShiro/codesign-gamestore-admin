import { DialogProvider } from '@features/dialog';
import ToastProvider from '@features/toast/components/toast-provider';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { NotificationsProvider } from './features/notifications';
import { router } from './router';

const App = () => {
    const appRouter = useMemo(() => router, []);

    return (
        <NotificationsProvider>
            <ToastProvider duration={3000}>
                <DialogProvider>
                    <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />
                </DialogProvider>
            </ToastProvider>
        </NotificationsProvider>
    );
};

export default App;
