import Navbar from '@components/navbar';
import { Sidebar } from '@components/sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className="grid h-dvh w-dvw grid-rows-[auto_1fr_auto]">
            <Navbar />
            <div className="grid min-h-0 grid-cols-[auto_1fr]">
                <Sidebar />
                <div className="overflow-x-clip overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
