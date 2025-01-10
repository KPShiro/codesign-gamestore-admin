import { convertBytes, formatNumber, isNotDefined } from '@/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import ImageInputPlaceholder from './image-input-placeholder';
import ImageInputValue from './image-input-value';

type ImageInputErrorType = 'INVALID_SIZE' | 'INVALID_TYPE';

type ImageInputError = {
    type: ImageInputErrorType;
    file: File;
};

type ImageInputProps = {
    value?: File | null;
    onValueChange?: (value: File | null) => void;
    onError?: (error: ImageInputError) => void;
    maxFileSize: number;
    placeholder?: string;
    accept?: string;
};

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
    ({ value, onValueChange, onError, maxFileSize, placeholder, accept = 'image/*' }, ref) => {
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

        const handleOnTrigger = () => {
            if (isNotDefined(inputRef.current)) {
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
            <div className="flex flex-col gap-2">
                <VisuallyHidden>
                    <input ref={inputRef} type="file" accept={accept} onChange={handleOnChange} />
                </VisuallyHidden>
                {file ? (
                    <ImageInputValue
                        file={file}
                        onClick={handleOnTrigger}
                        onFileRemove={clearInput}
                    />
                ) : (
                    <ImageInputPlaceholder
                        title={placeholder ?? 'Upload your image'}
                        description={`Max. file size: ${formatNumber(convertBytes(maxFileSize, 'MB'))} MB`}
                        onClick={handleOnTrigger}
                    />
                )}
            </div>
        );
    }
);

export default ImageInput;
