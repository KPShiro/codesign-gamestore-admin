import { Sidebar } from '@components/sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className="flex h-dvh">
            <Sidebar />
            <div className="h-full flex-1 overflow-auto">
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
