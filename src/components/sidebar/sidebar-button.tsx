import { cn } from '@/utils';
import { Icon } from '@components/icon';
import { LucideProps } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type SidebarButtonProps = {
    to: React.ComponentProps<typeof NavLink>['to'];
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
                        ? 'bg-primary/15 text-primary before:bg-primary relative before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-0.5 before:content-[""]'
                        : 'text-on-surface/60 hover:bg-on-surface/5 hover:text-on-surface bg-transparent'
                )
            }
            title={text}
        >
            <Icon icon={icon} size="sm" />
        </NavLink>
    );
};

export default SidebarButton;
