import { cn } from '@/utils';
import Icon from '@components/ui/icon';
import { LucideProps } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type SidebarButtonProps = Pick<React.ComponentProps<typeof NavLink>, 'to'> & {
    icon: React.ElementType<LucideProps>;
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
            <Icon icon={icon} />
        </NavLink>
    );
};

export default SidebarButton;
