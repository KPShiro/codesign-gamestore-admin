import { cn } from '@/utils';
import { Icon } from '@components/icon';
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
                    'flex size-10 items-center justify-center gap-3 rounded border border-foreground/10',
                    isActive
                        ? 'border-primary/15 bg-primary/15 text-primary'
                        : 'bg-transparent text-foreground hover:bg-foreground/5'
                )
            }
            title={text}
        >
            <Icon icon={icon} size="md" />
        </NavLink>
    );
};

export default SidebarButton;
