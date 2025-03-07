import { cn } from '@/utils';
import { GamepadIcon, MapPinOffIcon, PiggyBankIcon, PlayIcon } from 'lucide-react';
import SidebarButton from './sidebar-button';

type SidebarProps = React.ComponentProps<'aside'>;

const Sidebar = ({ className, ...props }: SidebarProps) => {
    return (
        <aside {...props} className={cn('bg-on-surface/5 h-full overflow-y-auto', className)}>
            <SidebarButton to="fake-casino" icon={PlayIcon} text="Fake Casino" />
            <SidebarButton to="catalog" icon={GamepadIcon} text="Games Catalog" />
            <SidebarButton to="management/jackpots" icon={PiggyBankIcon} text="Jackpots" />
            <SidebarButton to="management/geoblock" icon={MapPinOffIcon} text="Geoblock" />
        </aside>
    );
};

export default Sidebar;
