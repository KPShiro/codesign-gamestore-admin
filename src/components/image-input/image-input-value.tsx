import { Maybe } from '@/models/maybe';
import { cn, convertBytes, formatNumber } from '@/utils';
import { Icon } from '@components/icon';
import { UploadIcon, XIcon } from 'lucide-react';

type ImageInputValueProps = {
    file: Maybe<File>;
    onUploadClick: () => void;
    onRemoveClick: () => void;
    disabled?: boolean;
    invalid?: boolean;
} & Pick<React.ComponentProps<'input'>, 'placeholder'>;

const ImageInputValue = ({
    file,
    placeholder = 'Select image',
    onUploadClick,
    onRemoveClick,
    disabled = false,
    invalid = false,
}: ImageInputValueProps) => {
    return (
        <div className={cn('flex h-10 select-none gap-1', disabled && 'opacity-disabled')}>
            <div
                className={cn(
                    'group flex aspect-square h-full cursor-pointer items-center justify-center overflow-clip rounded-md border',
                    invalid &&
                        'cursor-pointer focus-visible:ring-2 focus-visible:ring-danger focus-visible:ring-offset-2 [&:not(:focus)]:border-danger [&:not(:focus)]:bg-danger/5'
                )}
                onClick={file ? onRemoveClick : onUploadClick}
            >
                {file ? (
                    <div className="relative isolate">
                        <img src={URL.createObjectURL(file)} className="object-cover" />
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-foreground/15 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <Icon icon={XIcon} size="xs" className="text-background" />
                        </div>
                    </div>
                ) : (
                    <Icon icon={UploadIcon} size="xs" className="text-muted-foreground" />
                )}
            </div>
            <div
                className={cn(
                    'flex h-full flex-1 cursor-pointer rounded-md border',
                    invalid &&
                        'focus-visible:ring-2 focus-visible:ring-danger focus-visible:ring-offset-2 [&:not(:focus)]:border-danger [&:not(:focus)]:bg-danger/5'
                )}
                onClick={disabled ? undefined : onUploadClick}
            >
                <div
                    className={cn(
                        'grid h-full flex-1 items-center gap-3 px-3',
                        file ? 'grid-cols-[1fr_auto]' : 'grid-cols-1'
                    )}
                >
                    <div className="truncate text-sm">{file ? file.name : placeholder}</div>
                    {file ? (
                        <div className="text-xs text-muted-foreground">
                            {formatNumber(convertBytes(file.size, 'MB'))} MB
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ImageInputValue;
