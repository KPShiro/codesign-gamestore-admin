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
                    'flex size-12 items-center justify-center',
                    isActive
                        ? 'relative bg-primary/10 text-primary before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-0.5 before:bg-primary before:content-[""]'
                        : 'bg-transparent text-foreground hover:bg-foreground/5'
                )
            }
            title={text}
        >
            <Icon icon={icon} size="sm" />
        </NavLink>
    );
};

export default SidebarButton;
