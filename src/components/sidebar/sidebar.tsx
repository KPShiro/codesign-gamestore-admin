import { GamepadIcon, MapPinOffIcon, PiggyBankIcon, PlayIcon } from 'lucide-react';
import SidebarButton from './sidebar-button';

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-4 bg-foreground/5 px-4 py-6">
            <div className="flex flex-col gap-2">
                <SidebarButton to="fake-casino" icon={PlayIcon} text="Fake Casino" />
                <SidebarButton to="catalog" icon={GamepadIcon} text="Games Catalog" />
                <SidebarButton to="management/jackpots" icon={PiggyBankIcon} text="Jackpots" />
                <SidebarButton to="management/geoblock" icon={MapPinOffIcon} text="Geoblock" />
            </div>
        </aside>
    );
};

export default Sidebar;
