import { DialogProvider } from '@features/dialog';
import ToastProvider from '@features/toast/components/toast-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { NotificationsProvider } from './features/notifications';
import { router } from './router';

const queryClient = new QueryClient();

const App = () => {
    const appRouter = useMemo(() => router, []);

    return (
        <QueryClientProvider client={queryClient}>
            <NotificationsProvider>
                <ToastProvider duration={3000}>
                    <DialogProvider>
                        <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />
                    </DialogProvider>
                </ToastProvider>
            </NotificationsProvider>
        </QueryClientProvider>
    );
};

export default App;
