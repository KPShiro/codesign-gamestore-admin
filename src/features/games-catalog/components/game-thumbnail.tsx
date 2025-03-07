import { Thumbnail } from '@/components/thumbnail';
import { Icon } from '@components/icon';
import { useViewGameAction } from '@features/games-catalog/actions/use-view-game';
import { Game } from '@features/games-catalog/models/game';
import { SquareArrowOutUpRightIcon } from 'lucide-react';

type GameThumbnailProps = {
    id: Game['id'];
    thumbnail: Game['thumbnail'];
    size?: React.ComponentProps<typeof Thumbnail>['size'];
};

const GameThumbnail = ({ id, thumbnail, size = 'sm' }: GameThumbnailProps) => {
    const action = useViewGameAction(id);

    return (
        <button
            className="group text-muted-foreground relative isolate flex flex-shrink-0 flex-grow-0 cursor-default items-center justify-center rounded-sm border select-none enabled:cursor-pointer"
            disabled={action.isDisabled}
            onClick={action.execute}
        >
            {!action.isDisabled ? (
                <div className="bg-foreground/25 group-active:bg-foreground/50 absolute inset-0 z-10 flex items-center justify-center rounded-sm opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <Icon
                        icon={SquareArrowOutUpRightIcon}
                        size="md"
                        className="stroke-background"
                    />
                </div>
            ) : null}
            <Thumbnail src={thumbnail} size={size} />
        </button>
    );
};

export default GameThumbnail;
