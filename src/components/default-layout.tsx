import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';
import Button from './ui/button';

const DefaultLayout = () => {
    return (
        <div className="grid h-dvh grid-rows-[auto_1fr] gap-4 p-4">
            <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1.5 text-sm">
                    <div className="font-bold">CODESIGN</div>
                    <div className="text-muted-foreground">Gamestore</div>
                </div>
                <div className="flex items-center gap-2">
                    <Button type="button" variant="outlined" icon="bell" />
                    <Button type="button" variant="outlined" icon="settings" />
                    <Button type="button" variant="outlined" icon="log-out" />
                </div>
            </div>
            <div className="flex min-h-0 flex-1 overflow-clip rounded-lg border bg-card">
                <Sidebar />
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
