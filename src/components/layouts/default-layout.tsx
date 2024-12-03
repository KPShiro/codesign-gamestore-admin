import { NotificationsTrigger } from '@/features/notifications';
import { Sidebar } from '@components/sidebar';
import Button from '@components/ui/button';
import { LogOutIcon, SettingsIcon } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr] gap-4 p-4">
            <div className="mx-auto flex w-full max-w-[2000px] items-center justify-between gap-4">
                <div className="flex gap-1.5 text-sm">
                    <div className="font-bold">CODESIGN</div>
                    <div className="text-muted-foreground">Gamestore</div>
                </div>
                <div className="flex items-center gap-2">
                    <NotificationsTrigger />
                    <Button type="button" variant="outlined" icon={SettingsIcon} />
                    <Button type="button" variant="outlined" icon={LogOutIcon} />
                </div>
            </div>
            <div className="mx-auto flex min-h-0 w-full max-w-[2000px] flex-1 overflow-clip rounded-lg border bg-card">
                <Sidebar />
                <div className="inline-flex flex-1 flex-col overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
