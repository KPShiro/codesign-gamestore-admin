import { useAuth } from '@/hooks/use-auth';
import Button from '@components/ui/button';
import { NotificationsTrigger } from '@features/notifications';
import { LogOutIcon, SettingsIcon } from 'lucide-react';

const Navbar = () => {
    const { signOut } = useAuth();

    return (
        <div className="mx-auto flex w-full max-w-[2000px] items-center justify-between gap-4">
            <div className="flex gap-1.5 text-sm">
                <div className="font-bold">CODESIGN</div>
                <div className="text-muted-foreground">Gamestore</div>
            </div>
            <div className="flex items-center gap-2">
                <NotificationsTrigger />
                <Button type="button" variant="outlined" icon={SettingsIcon} />
                <Button type="button" variant="outlined" icon={LogOutIcon} onClick={signOut} />
            </div>
        </div>
    );
};

export default Navbar;
