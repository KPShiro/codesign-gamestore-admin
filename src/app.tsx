import DefaultLayout from '@components/default-layout';
import ToastProvider from '@features/toast/components/toast-provider';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <ToastProvider>
            <DefaultLayout>
                <Outlet />
            </DefaultLayout>
        </ToastProvider>
    );
};

export default App;
