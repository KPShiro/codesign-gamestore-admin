import { cn, isNotDefined } from '@/utils';
import Card from '@components/card';
import Button from '@components/ui/button';
import { useToast } from '@features/toast';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { TrashIcon } from 'lucide-react';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState } from 'react';

type ImageInputProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> & {
    onChange?: (file: File | null) => void;
    accept: React.InputHTMLAttributes<HTMLInputElement>['accept'];
    placeholder: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
    maxSize: number;
    showFileRestrictions?: boolean;
    value?: File | null;
};

const FileInput = forwardRef<HTMLInputElement, ImageInputProps>(
    ({ value, showFileRestrictions, className, ...props }, ref) => {
        const [file, setFile] = useState<typeof value>(value);
        const inputRef = useRef<HTMLInputElement>(null);
        const toast = useToast();

        useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
            ref,
            () => inputRef.current,
            []
        );

        const maxSizeInMegabytes = props.maxSize
            ? Math.round((props.maxSize / 1024 / 1024 + Number.EPSILON) * 100) / 100
            : undefined;

        const isImageType = useMemo(() => {
            if (isNotDefined(file)) {
                return false;
            }

            return file.type.includes('image');
        }, [file]);

        const handleOnClick = () => {
            if (isNotDefined(inputRef.current)) {
                return;
            }

            inputRef.current.click();
        };

        const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            const selectedFiles: FileList | null = event.currentTarget.files || null;

            if (isNotDefined(selectedFiles)) {
                return;
            }

            const file = selectedFiles[0];

            if (isNotDefined(file)) {
                return;
            }

            if (file.size > props.maxSize && inputRef.current) {
                inputRef.current.value = '';
                toast.show({
                    variant: 'danger',
                    title: 'This file is too big!',
                    description: `We only allow files that are smaller than ${maxSizeInMegabytes}MB. Please use a different file or optimaze it.`,
                });
                return;
            }

            props.onChange?.(file);
            setFile(file);
        };

        const handleOnClickRemove: React.MouseEventHandler<HTMLButtonElement> = () => {
            props.onChange?.(null);
            setFile(null);

            if (inputRef.current) {
                inputRef.current.value = '';
            }
        };

        return (
            <div className="flex flex-col gap-2">
                <VisuallyHidden>
                    <input
                        ref={inputRef}
                        type="file"
                        accept={props.accept}
                        max={props.maxSize}
                        onChange={handleOnChange}
                    />
                </VisuallyHidden>
                <div
                    className={cn(
                        'h-20 select-none rounded border border-dashed bg-muted p-0.5',
                        className
                    )}
                >
                    {file ? (
                        <Card
                            key={file.name}
                            className="h-full flex-row items-center justify-between rounded-sm p-3 pr-5"
                        >
                            {isImageType && (
                                <div className="aspect-square h-full overflow-clip rounded-sm border bg-black/10">
                                    <img
                                        className="size-full object-cover"
                                        src={URL.createObjectURL(file)}
                                    />
                                </div>
                            )}
                            <div className="min-w-0 flex-1">
                                <div className="truncate text-sm">{file.name}</div>
                                <div className="truncate text-xs text-muted-foreground">
                                    {file.type}
                                </div>
                            </div>
                            <Button
                                variant="outlined"
                                icon={TrashIcon}
                                onClick={handleOnClickRemove}
                            />
                        </Card>
                    ) : (
                        <div
                            className={cn(
                                'flex h-full cursor-pointer items-center justify-center rounded-sm text-muted-foreground'
                            )}
                            onClick={handleOnClick}
                        >
                            <div className="truncate text-center text-xs">
                                {props.placeholder ?? 'No files selected'}
                            </div>
                        </div>
                    )}
                </div>
                {showFileRestrictions && (
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        {props.accept ? (
                            <div className="space-x-1.5 truncate">
                                <span>Allowed types:</span>
                                <span>{props.accept}</span>
                            </div>
                        ) : null}
                        {maxSizeInMegabytes ? (
                            <div className="truncate">Max. size: {maxSizeInMegabytes} MB</div>
                        ) : null}
                    </div>
                )}
            </div>
        );
    }
);

FileInput.displayName = 'ImageInput';

export default FileInput;
