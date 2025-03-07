import { useAuth } from '@/hooks/use-auth';
import { NotificationsTrigger } from '@features/notifications';
import { LogOutIcon, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { OutlinedButton } from './button';

const Navbar = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    return (
        <nav className="border-b px-4 py-3">
            <div className="flex items-center justify-between">
                <div
                    className="flex cursor-pointer items-center gap-1 select-none"
                    onClick={() => navigate('/')}
                >
                    <div className="border-b-primary/50 border-l-primary/25 border-t-primary size-5 rounded-full border-[6px] border-r-transparent"></div>
                    <div className="font-bold">CODESIGN</div>
                </div>
                <div className="flex items-center gap-2">
                    <NotificationsTrigger />
                    <OutlinedButton icon={SettingsIcon} />
                    <OutlinedButton icon={LogOutIcon} onClick={signOut} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
