import { convertBytes, formatNumber } from '@/utils';
import Card from '@components/card';
import Thumbnail from '@components/thumbnail';
import Button from '@components/ui/button';
import { TrashIcon } from 'lucide-react';

type ImageInputValueProps = {
    file: File;
    onClick: () => void;
    onFileRemove: () => void;
};

const ImageInputValue = ({ file, onClick, onFileRemove }: ImageInputValueProps) => {
    return (
        <Card
            className="flex h-24 cursor-pointer flex-row items-center gap-5 p-3 pr-6"
            onClick={onClick}
        >
            <div className="aspect-square h-full">
                <Thumbnail size={'full'} src={URL.createObjectURL(file)} />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
                <div className="truncate text-sm font-medium">{file.name}</div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs uppercase text-muted-foreground">
                    <div>{file.type}</div>
                    <div className="size-0.5 rounded-full bg-muted-foreground"></div>
                    <div>{formatNumber(convertBytes(file.size, 'MB'))} MB</div>
                </div>
            </div>
            <Button
                variant={'outlined'}
                size={'sm'}
                icon={TrashIcon}
                onClick={(event) => {
                    event.stopPropagation();
                    onFileRemove();
                }}
            />
        </Card>
    );
};

export default ImageInputValue;
