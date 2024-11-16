import SidebarButton from './sidebar-button';

const Sidebar = () => {
    return (
        <nav className="flex flex-col gap-4 bg-background p-4">
            <div className="flex flex-col gap-2">
                <SidebarButton to="fake-casino" icon="play" text="Fake Casino" />
            </div>
            <div className="h-px bg-border"></div>
            <div className="flex flex-col gap-2">
                <SidebarButton to="catalog" icon="gamepad" text="Games Catalog" />
                <SidebarButton to="management/jackpots" icon="piggy-bank" text="Jackpots" />
                <SidebarButton to="management/geoblock" icon="map-pin-off" text="Geoblock" />
            </div>
        </nav>
    );
};

export default Sidebar;
