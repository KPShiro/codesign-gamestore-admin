import { cn } from '@/utils';
import { LucideProps } from 'lucide-react';

type IconProps = LucideProps & {
    icon: React.ElementType<LucideProps>;
};

const Icon = ({ icon, className, ...props }: IconProps) => {
    const IconComponent = icon;

    return (
        <IconComponent
            size={16}
            strokeWidth={1.5}
            absoluteStrokeWidth
            className={cn('flex-shrink-0 flex-grow-0', className)}
            {...props}
        />
    );
};

export default Icon;
