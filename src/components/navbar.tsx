import { useAuth } from '@/hooks/use-auth';
import Button from '@components/ui/button';
import { NotificationsTrigger } from '@features/notifications';
import { LogOutIcon, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="border-b px-4 py-3">
            <div className="flex items-center justify-between">
                <div
                    className="flex cursor-pointer select-none items-center gap-1"
                    onClick={() => navigate('/')}
                >
                    <div className="size-5 rounded-full border-[6px] border-b-primary/50 border-l-primary/25 border-r-transparent border-t-primary"></div>
                    <div className="font-bold">CODESIGN</div>
                </div>
                <div className="flex items-center gap-2">
                    <NotificationsTrigger />
                    <Button type="button" variant="outlined" icon={SettingsIcon} />
                    <Button type="button" variant="outlined" icon={LogOutIcon} onClick={signOut} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
