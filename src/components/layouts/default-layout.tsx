import Navbar from '@components/navbar';
import { Sidebar } from '@components/sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr] gap-4 p-4">
            <Navbar />
            <div className="mx-auto flex min-h-0 w-full max-w-[2000px] flex-1 overflow-clip rounded-lg border bg-background">
                <Sidebar />
                <div className="inline-flex flex-1 flex-col overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
