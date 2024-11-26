import { LucideProps } from 'lucide-react';

type IconProps = LucideProps & {
    icon: React.ElementType<LucideProps>;
};

const Icon = ({ icon, ...props }: IconProps) => {
    const IconComponent = icon;

    return <IconComponent size={16} strokeWidth={1.5} absoluteStrokeWidth {...props} />;
};

export default Icon;
