import { formatNumber, formatPercent } from '@/utils';
import GameThumbnail from '@features/games-catalog/components/game-thumbnail';
import PublishStatusWidget from '@features/games-catalog/components/publish-status-widget';
import SupportedCoinsWidget from '@features/games-catalog/components/supported-coins-widget';
import { Game } from '@features/games-catalog/models/game';
import GamesTableItemMenu from './games-table-item-menu';

type GamesTableItemProps = {
    game: Game;
};

const GamesTableItem = ({ game }: GamesTableItemProps) => {
    return (
        <tr>
            <td>
                <div className="flex items-center gap-4">
                    <GameThumbnail id={game.id} thumbnail={game.thumbnail} size={'sm'} />
                    <div className="flex min-w-0 flex-col gap-0.5">
                        <div className="truncate font-medium">{game.title}</div>
                        <div className="truncate text-xs uppercase text-muted-foreground">
                            {game.id}
                        </div>
                    </div>
                </div>
            </td>
            <td className="hidden md:table-cell">
                <PublishStatusWidget status={game.publishStatus} />
            </td>
            <td className="hidden lg:table-cell">
                <div className="flex flex-col gap-0.5">
                    <div className="truncate">{game.provider.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{game.studio.name}</div>
                </div>
            </td>
            <td className="hidden text-right xl:table-cell">
                <span className="tabular-nums">{formatPercent(game.rtp)}</span>
            </td>
            <td className="hidden text-right xl:table-cell">
                <span className="tabular-nums">{formatNumber(game.win.max)}</span>
            </td>
            <td className="hidden text-center xl:table-cell">
                <SupportedCoinsWidget coins={game.coins} />
            </td>
            <td className="text-right">
                <GamesTableItemMenu game={game} />
            </td>
        </tr>
    );
};

export default GamesTableItem;
