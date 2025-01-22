import { isNotDefined } from '@/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import ImageInputValue from './image-input-value';

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

        const handleOnTrigger = () => {
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
                <ImageInputValue
                    file={file}
                    placeholder={props.placeholder}
                    onUploadClick={handleOnTrigger}
                    onRemoveClick={clearInput}
                    disabled={props.disabled}
                    invalid={props.invalid}
                />
            </>
        );
    }
);

export default ImageInput;
