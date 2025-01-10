import Thumbnail from '@/components/thumbnail';
import Icon from '@components/ui/icon';
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
            className="group relative isolate flex flex-shrink-0 flex-grow-0 cursor-default select-none items-center justify-center rounded-sm border text-muted-foreground enabled:cursor-pointer"
            disabled={action.isDisabled}
            onClick={action.execute}
        >
            {!action.isDisabled ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-sm bg-foreground/25 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-active:bg-foreground/50">
                    <Icon icon={SquareArrowOutUpRightIcon} className="stroke-background" />
                </div>
            ) : null}
            <Thumbnail src={thumbnail} size={size} />
        </button>
    );
};

export default GameThumbnail;
