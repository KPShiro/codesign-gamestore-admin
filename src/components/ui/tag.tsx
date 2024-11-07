import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva(
    'inline-flex px-2.5 py-0.5 max-w-32 rounded-sm select-none border border-transparent',
    {
        variants: {
            variant: {
                muted: 'bg-muted text-muted-foreground',
                filled: 'bg-primary text-primary-foreground hover:bg-primary/90',
                tonal: 'bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/25',
                outlined:
                    'bg-transparent text-primary border-primary/15 hover:bg-primary/20 active:bg-primary/25',
            },
        },
        defaultVariants: {
            variant: 'muted',
        },
    }
);

type TagProps = React.ComponentPropsWithoutRef<'div'> &
    VariantProps<typeof variants> & {
        text: null | undefined | string;
    };

const Tag = ({ variant, text, className, ...props }: TagProps) => {
    return (
        <div {...props} className={cn(variants({ variant }), className)}>
            {text ? <div className="truncate text-center text-xs font-medium">{text}</div> : null}
        </div>
    );
};

export default Tag;
