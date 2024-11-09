import ToastProvider from '@features/toast/components/toast-provider';
import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => {
    const appRouter = useMemo(() => router, []);

    return (
        <ToastProvider>
            <RouterProvider router={appRouter} future={{ v7_startTransition: true }} />
        </ToastProvider>
    );
};

export default App;

