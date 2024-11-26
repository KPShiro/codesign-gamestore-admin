import { GamepadIcon, MapPinOffIcon, PiggyBankIcon, PlayIcon } from 'lucide-react';
import SidebarButton from './sidebar-button';

const Sidebar = () => {
    return (
        <nav className="flex flex-col gap-4 bg-background p-4">
            <div className="flex flex-col gap-2">
                <SidebarButton to="fake-casino" icon={PlayIcon} text="Fake Casino" />
            </div>
            <div className="h-px bg-border"></div>
            <div className="flex flex-col gap-2">
                <SidebarButton to="catalog" icon={GamepadIcon} text="Games Catalog" />
                <SidebarButton to="management/jackpots" icon={PiggyBankIcon} text="Jackpots" />
                <SidebarButton to="management/geoblock" icon={MapPinOffIcon} text="Geoblock" />
            </div>
        </nav>
    );
};

export default Sidebar;
