import { cn, convertBytes, formatNumber, isNotDefined } from '@/utils';
import { Icon } from '@components/icon';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { UploadIcon, XIcon } from 'lucide-react';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

type ImageInputErrorType = 'INVALID_SIZE' | 'INVALID_TYPE';

type ImageInputError = {
    type: ImageInputErrorType;
    file: File;
};

type ImageInputProps = {
    value?: File | null;
    maxFileSize?: number;
    onValueChange?: (value: File | null) => void;
    onError?: (error: ImageInputError) => void;
    invalid?: boolean;
} & Pick<React.ComponentProps<'input'>, 'placeholder' | 'disabled'>;

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
    ({ value, onValueChange, onError, maxFileSize = 3_145_728, ...props }, ref) => {
        const [file, setFile] = useState<typeof value>(value);
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
            ref,
            () => inputRef.current,
            []
        );

        const clearInput = () => {
            onValueChange?.(null);
            setFile(null);

            if (inputRef.current) {
                inputRef.current.value = '';
            }
        };

        const handleOnClearInput: React.MouseEventHandler<HTMLDivElement> = (event) => {
            event.stopPropagation();
            clearInput();
        };

        const handleOnTriggerUpload = () => {
            if (isNotDefined(inputRef.current) || props.disabled) {
                return;
            }

            inputRef.current.click();
        };

        const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const uploadedFiles: FileList | null = event.currentTarget.files || null;

            if (isNotDefined(uploadedFiles) || isNotDefined(inputRef.current)) {
                return;
            }

            if (uploadedFiles.length === 0) {
                return;
            }

            const uploadedFile = uploadedFiles[0];

            if (!uploadedFile.type.includes('image')) {
                onError?.({
                    type: 'INVALID_TYPE',
                    file: uploadedFile,
                });
                clearInput();
                return;
            }

            if (uploadedFile.size > maxFileSize) {
                onError?.({
                    type: 'INVALID_SIZE',
                    file: uploadedFile,
                });
                clearInput();
                return;
            }

            onValueChange?.(uploadedFile);
            setFile(uploadedFile);
        };

        return (
            <>
                <VisuallyHidden>
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={handleOnChange}
                    />
                </VisuallyHidden>
                <div
                    className={cn(
                        'bg-surface focus-visible:ring-primary/15 focus-visible:border-primary focus-visible:bg-surface-container group relative h-40 cursor-pointer overflow-clip rounded-md border focus-visible:ring-3 focus-visible:outline-none',
                        props.invalid &&
                            '[&:not(:focus)]:border-danger [&:not(:focus)]:bg-danger/10 ring-danger/15 ring-3',
                        props.disabled && 'opacity-disabled cursor-default'
                    )}
                    onClick={props.disabled ? undefined : handleOnTriggerUpload}
                    tabIndex={0}
                >
                    {file ? (
                        <div
                            className="bg-on-surface/50 text-surface absolute inset-0 flex items-center justify-center overflow-clip rounded-md opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
                            onClick={handleOnClearInput}
                        >
                            <Icon icon={XIcon} size="sm" />
                        </div>
                    ) : null}
                    {file ? (
                        <img src={URL.createObjectURL(file)} className="size-full object-cover" />
                    ) : (
                        <div className="flex size-full flex-col items-center justify-center gap-4 select-none">
                            <Icon icon={UploadIcon} className="text-on-surface/60" />
                            <div className="text-on-surface/60 flex flex-col gap-1 text-center">
                                <div className="text-sm">
                                    {props.placeholder ?? (
                                        <>
                                            <b>Click to upload</b> or drag and drop
                                        </>
                                    )}
                                </div>
                                <div className="text-xs">
                                    SVG, PNG, JPG or GIF (Max. Size:{' '}
                                    {formatNumber(convertBytes(maxFileSize, 'MB'))} MB)
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    }
);

export default ImageInput;
