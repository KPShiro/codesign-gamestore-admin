import Thumbnail from '@components/thumbnail';
import Icon from '@components/ui/icon';
import { Game } from '@features/games-catalog/models/game';
import { PlayIcon } from 'lucide-react';

type GameThumbnailProps = {
    game: Game;
};

const GameTableItemThumbnail = ({ game }: GameThumbnailProps) => {
    return (
        <button
            title={game.title}
            className="group relative isolate flex size-12 flex-shrink-0 flex-grow-0 cursor-pointer select-none items-center justify-center overflow-clip rounded-sm text-muted-foreground"
        >
            <div className="absolute inset-0 z-10 hidden items-center justify-center rounded-sm bg-black/25 backdrop-blur-sm group-hover:flex">
                <Icon icon={PlayIcon} className="stroke-white" />
            </div>
            <Thumbnail src={game.thumbnail} alt={game.title} size={'md'} />
        </button>
    );
};

export default GameTableItemThumbnail;
