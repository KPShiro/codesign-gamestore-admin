import { cn } from '@/utils';
import Input from '@components/ui/input';
import {
    BoxIcon,
    ChevronsUpDownIcon,
    GlobeLockIcon,
    HelpCircleIcon,
    LogOutIcon,
    PiggyBankIcon,
    SettingsIcon,
} from 'lucide-react';
import SidebarButton from './sidebar-button';

type SidebarProps = React.HTMLAttributes<HTMLDivElement>;

const Sidebar = ({ className, ...props }: SidebarProps) => {
    const ICON_SIZE: number = 16;

    return (
        <nav {...props} className={cn('flex w-72 flex-col justify-between gap-6 p-6', className)}>
            <div className="flex flex-col gap-4">
                <div className="flex h-10 cursor-default select-none items-center justify-between gap-2 rounded border bg-muted px-3 text-foreground">
                    <span className="flex-1 truncate text-sm font-medium">Codesign Ltd.</span>
                    <ChevronsUpDownIcon size={12} />
                </div>
                <Input type="search" placeholder="Search..." />
                <div className="flex flex-col gap-2">
                    <SidebarButton
                        to="catalog"
                        icon={<BoxIcon size={ICON_SIZE} />}
                        text="Games Catalog"
                    />
                    <SidebarButton
                        to="management/jackpots"
                        icon={<PiggyBankIcon size={ICON_SIZE} />}
                        text="Jackpots"
                    />
                    <SidebarButton
                        to="management/geoblock"
                        icon={<GlobeLockIcon size={ICON_SIZE} />}
                        text="Geoblock"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <SidebarButton to="help" icon={<HelpCircleIcon size={ICON_SIZE} />} text="Help" />
                <SidebarButton
                    to="settings"
                    icon={<SettingsIcon size={ICON_SIZE} />}
                    text="Settings"
                />
                <div className="my-4 h-px w-full bg-border"></div>
                <SidebarButton to="logout" icon={<LogOutIcon size={ICON_SIZE} />} text="Sign Out" />
            </div>
        </nav>
    );
};

export default Sidebar;
