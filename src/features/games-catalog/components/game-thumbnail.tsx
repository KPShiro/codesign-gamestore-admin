import Thumbnail from '@/components/thumbnail';
import Icon from '@components/ui/icon';
import { Game } from '@features/games-catalog/models/game';
import { PlayIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type GameThumbnailProps = {
    id: Game['id'];
    thumbnail: Game['thumbnail'];
    size?: React.ComponentProps<typeof Thumbnail>['size'];
};

const GameThumbnail = ({ id, thumbnail, size = 'sm' }: GameThumbnailProps) => {
    const navigate = useNavigate();

    return (
        <button
            className="group relative isolate flex flex-shrink-0 flex-grow-0 cursor-pointer select-none items-center justify-center rounded-sm text-muted-foreground"
            onClick={() => navigate(`/casino/${id}`)}
        >
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-sm bg-foreground/25 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-active:bg-foreground/50">
                <Icon
                    icon={PlayIcon}
                    className="scale-50 stroke-white transition-transform duration-300 group-hover:scale-100"
                />
            </div>
            <div className="relative">
                <Thumbnail src={thumbnail} size={size} />
                <div className="absolute inset-0 -z-[1] transition-all duration-500 group-hover:blur-sm group-active:blur-none">
                    <Thumbnail src={thumbnail} size={size} />
                </div>
            </div>
        </button>
    );
};

export default GameThumbnail;
