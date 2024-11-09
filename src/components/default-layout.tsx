import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => (
    <div className="flex min-h-dvh flex-col">
        <Navbar className="sticky top-0 z-10" />
        <div className="container flex-1">
            <Outlet />
        </div>
        <Footer />
    </div>
);

export default DefaultLayout;
