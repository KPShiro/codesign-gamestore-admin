import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { lazy, Suspense } from 'react';

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }} />;

export type IconName = keyof typeof dynamicIconImports;

type IconProps = Omit<LucideProps, 'ref'> & {
    name: IconName;
};

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = lazy(dynamicIconImports[name]);

    return (
        <Suspense fallback={fallback}>
            <LucideIcon {...props} />
        </Suspense>
    );
};

export default Icon;
