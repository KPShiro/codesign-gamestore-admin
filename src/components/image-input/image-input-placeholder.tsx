type ImageInputPlaceholderProps = {
    title: string;
    description?: string;
    onClick: () => void;
};

const ImageInputPlaceholder = ({ title, description, onClick }: ImageInputPlaceholderProps) => {
    return (
        <div
            className="h-24 w-full cursor-pointer select-none rounded border bg-[radial-gradient(hsl(var(--color-foreground)_/_0.1)_1px,_transparent_0)] bg-[length:10px_10px]"
            onClick={onClick}
        >
            <div className="flex size-full flex-col items-center justify-center gap-0.5 text-xs">
                <h5 className="font-medium text-foreground">{title}</h5>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};

export default ImageInputPlaceholder;
