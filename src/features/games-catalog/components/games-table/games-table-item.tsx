import { useNumberFormatter } from '@/hooks/use-number-formatter';
import { usePercentFormatter } from '@/hooks/use-percent-formatter';
import Button from '@components/ui/button';
import GamePublishStatusWidget from '@features/games-catalog/components/game-publish-status-widget';
import GameTagsWidget from '@features/games-catalog/components/game-tags-widget';
import { Game } from '@features/games-catalog/models/game';
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
                    <div className="flex min-w-0 flex-col gap-0.5">
                        <div className="truncate font-medium">{game.title}</div>
                        <div className="truncate text-xs uppercase text-muted-foreground">
                            {game.id}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <GamePublishStatusWidget status={game.publishStatus} />
            </td>
            <td className="hidden lg:table-cell">
                <div className="flex flex-col gap-0.5">
                    <div className="truncate">{game.provider.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{game.studio.name}</div>
                </div>
            </td>
            <td className="hidden text-right lg:table-cell">{percentFormatter.format(game.rtp)}</td>
            <td className="hidden text-right tabular-nums lg:table-cell">
                {numberFormatter.format(game.win.max)}
            </td>
            <td className="hidden text-center tabular-nums lg:table-cell">
                <GameTagsWidget tags={game.coins} />
            </td>
            <td className="text-center">
                <Button variant="text" size="sm" icon="ellipsis" />
            </td>
        </tr>
    );
};

export default GamesTableItem;
