import { PlayIcon } from 'lucide-react';
import { Game } from '../models/game';

type GameThumbnailProps = {
    game: Game;
};

const GameTableItemThumbnail = ({ game }: GameThumbnailProps) => {
    return (
        <button
            title={game.title}
            className="group relative isolate flex size-12 flex-shrink-0 flex-grow-0 cursor-pointer select-none items-center justify-center overflow-clip rounded-sm text-muted-foreground outline outline-black/15 transition-all hover:bg-black/10 hover:outline-2 active:outline-4"
        >
            <div className="absolute inset-0 z-10 hidden items-center justify-center bg-black/25 backdrop-blur-sm group-hover:flex">
                <PlayIcon size={16} className="stroke-white" />
            </div>
            <img src={game.thumbnail} alt={game.title} className="size-full object-cover" />
        </button>
    );
};

export default GameTableItemThumbnail;
