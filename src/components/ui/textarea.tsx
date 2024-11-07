import { cn } from '@/utils';

type TextareaProps = React.HTMLProps<HTMLTextAreaElement>;

const Textarea = ({ className, ...props }: TextareaProps) => (
    <textarea
        {...props}
        rows={props.rows || 3}
        className={cn(
            'min-h-10 rounded border px-3 py-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            className
        )}
    />
);

export default Textarea;
