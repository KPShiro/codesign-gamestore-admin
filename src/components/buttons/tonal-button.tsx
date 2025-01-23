import { cn } from '@/utils';
import { Icon } from '@components/icon';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2Icon, LucideProps } from 'lucide-react';
import { forwardRef } from 'react';
import { ButtonSize, ButtonVariant } from './types';

const variants = cva<{
    color: Record<ButtonVariant, string>;
    size: Record<ButtonSize, string>;
}>(
    'relative isolate inline-flex select-none items-center justify-center border border-transparent font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 enabled:cursor-pointer disabled:cursor-default disabled:bg-foreground/5 disabled:text-foreground/25',
    {
        variants: {
            color: {
                primary: 'bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/20',
                danger: 'bg-danger/10 text-danger hover:bg-danger/15 active:bg-danger/20',
            },
            size: {
                md: 'h-10 px-4 gap-2 text-sm rounded-md',
                sm: 'h-9 px-3.5 gap-1.5 text-xs rounded-sm',
                xs: 'h-8 px-3 gap-1 text-xs rounded-sm',
            },
        },
        defaultVariants: {
            color: 'primary',
            size: 'md',
        },
    }
);

type TonalButtonProps = {
    icon?: React.ElementType<LucideProps>;
    text?: string;
    loading?: boolean;
} & Omit<React.ComponentProps<'button'>, 'children'> &
    VariantProps<typeof variants>;

export const TonalButton = forwardRef<HTMLButtonElement, TonalButtonProps>(
    ({ icon, text, loading, color, size, className, ...props }, ref) => {
        return (
            <button
                {...props}
                ref={ref}
                title={props.title ?? text}
                disabled={props.disabled || loading}
                className={cn(
                    variants({ color, size, className }),
                    !text && icon && 'aspect-square px-0'
                )}
            >
                {loading ? (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <Icon icon={Loader2Icon} size="sm" className="animate-spin" />
                    </div>
                ) : null}
                {icon ? (
                    <Icon icon={icon} size="sm" className={cn(loading && 'opacity-0')} />
                ) : null}
                {text ? (
                    <div className={cn('inline-flex min-w-0', loading && 'opacity-0')}>
                        <span className="truncate">{text}</span>
                    </div>
                ) : null}
            </button>
        );
    }
);
