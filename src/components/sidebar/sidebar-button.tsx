import { cn } from '@/utils';
import Icon, { IconName } from '@components/icon';
import { NavLink } from 'react-router-dom';

type SidebarButtonProps = Pick<React.ComponentProps<typeof NavLink>, 'to'> & {
    icon: IconName;
    text: string;
};

const SidebarButton = ({ to, icon, text }: SidebarButtonProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(
                    'flex size-10 items-center justify-center gap-3 rounded border',
                    isActive
                        ? 'bg-card text-foreground'
                        : 'text-muted-foreground hover:border-foreground/15 hover:text-foreground'
                )
            }
            title={text}
        >
            <Icon name={icon} size={16} absoluteStrokeWidth strokeWidth={1.5} />
        </NavLink>
    );
};

export default SidebarButton;
