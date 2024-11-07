import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { PropsWithChildren } from 'react';

const DefaultLayout = ({ children }: PropsWithChildren) => (
    <div className="flex min-h-dvh flex-col">
        <Navbar className="sticky top-0 z-10" />
        <div className="container flex-1">{children}</div>
        <Footer />
    </div>
);

export default DefaultLayout;
