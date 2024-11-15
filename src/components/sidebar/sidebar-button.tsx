import { cn } from '@/utils';
import { NavLink } from 'react-router-dom';

type SidebarButtonProps = Pick<React.ComponentProps<typeof NavLink>, 'to'> & {
    icon: React.ReactNode;
    text: string;
    disabled?: boolean;
};

const SidebarButton = ({ to, icon, text, disabled = false }: SidebarButtonProps) => {
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (disabled) e.preventDefault();
    };

    return (
        <NavLink
            to={to}
            onClick={handleClick}
            className={cn(disabled && 'cursor-default opacity-25')}
        >
            {({ isActive }) => (
                <div
                    data-disabled={disabled}
                    className={cn(
                        'flex h-10 items-center gap-3 rounded px-3',
                        isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground data-[disabled=false]:hover:bg-muted'
                    )}
                >
                    {icon}
                    <div className="text-sm font-medium">{text}</div>
                </div>
            )}
        </NavLink>
    );
};

export default SidebarButton;
