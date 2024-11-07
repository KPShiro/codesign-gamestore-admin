import Button from '@/components/ui/button';
import { useNumberFormatter } from '@/hooks/use-number-formatter';
import { usePercentFormatter } from '@/hooks/use-percent-formatter';
import { EllipsisIcon } from 'lucide-react';
import { Game } from '../models/game';
import GamePublishStatusWidget from './game-publish-status-widget';
import GameTagsWidget from './game-tags-widget';
import GameTableItemThumbnail from './games-table-item-thumbnail';

type GamesTableItemProps = {
    game: Game;
};

const GamesTableItem = ({ game }: GamesTableItemProps) => {
    const numberFormatter = useNumberFormatter();
    const percentFormatter = usePercentFormatter();

    return (
        <tr key={game.id}>
            <td>
                <div className="flex items-center gap-4">
                    <GameTableItemThumbnail game={game} />
                    <div className="flex flex-col gap-0.5">
                        <div className="font-medium">{game.title}</div>
                        <div className="text-xs text-muted-foreground">{game.id}</div>
                    </div>
                </div>
            </td>
            <td>
                <GamePublishStatusWidget status={game.publishStatus} />
            </td>
            <td>
                <div className="flex flex-col gap-0.5">
                    <div className="truncate">{game.provider.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{game.studio.name}</div>
                </div>
            </td>
            <td className="text-right">{percentFormatter.format(game.rtp)}</td>
            <td className="text-right">{numberFormatter.format(game.win.max)}</td>
            <td className="text-center">
                <GameTagsWidget tags={game.coins} />
            </td>
            <td className="text-center">
                <Button
                    variant="text"
                    shape="square"
                    size="sm"
                    iconLeft={<EllipsisIcon size={16} />}
                />
            </td>
        </tr>
    );
};

export default GamesTableItem;
