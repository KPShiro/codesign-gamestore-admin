import { useNumberFormatter } from '@/hooks/use-number-formatter';
import { usePercentFormatter } from '@/hooks/use-percent-formatter';
import Button from '@components/ui/button';
import GamePublishStatusWidget from '@features/games-catalog/components/game-publish-status-widget';
import SupportedCoinsWidget from '@features/games-catalog/components/supported-coins-widget';
import { Game } from '@features/games-catalog/models/game';
import { EllipsisIcon } from 'lucide-react';
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
            <td className="hidden md:table-cell">
                <GamePublishStatusWidget status={game.publishStatus} />
            </td>
            <td className="hidden lg:table-cell">
                <div className="flex flex-col gap-0.5">
                    <div className="truncate">{game.provider.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{game.studio.name}</div>
                </div>
            </td>
            <td className="hidden text-right xl:table-cell">
                <span className="tabular-nums">{percentFormatter.format(game.rtp)}</span>
            </td>
            <td className="hidden text-right xl:table-cell">
                <span className="tabular-nums">{numberFormatter.format(game.win.max)}</span>
            </td>
            <td className="hidden text-center xl:table-cell">
                <SupportedCoinsWidget coins={game.coins} />
            </td>
            <td className="text-right">
                <Button variant="text" size="sm" icon={EllipsisIcon} />
            </td>
        </tr>
    );
};

export default GamesTableItem;

