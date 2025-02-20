import { GamepadIcon, MapPinOffIcon, PiggyBankIcon, PlayIcon } from 'lucide-react';
import SidebarButton from './sidebar-button';

const Sidebar = () => {
    return (
        <aside className="bg-foreground/5">
            <SidebarButton to="fake-casino" icon={PlayIcon} text="Fake Casino" />
            <SidebarButton to="catalog" icon={GamepadIcon} text="Games Catalog" />
            <SidebarButton to="management/jackpots" icon={PiggyBankIcon} text="Jackpots" />
            <SidebarButton to="management/geoblock" icon={MapPinOffIcon} text="Geoblock" />
        </aside>
    );
};

export default Sidebar;
