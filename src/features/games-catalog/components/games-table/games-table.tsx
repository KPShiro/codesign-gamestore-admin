import { Game } from '@features/games-catalog/models/game';
import GamesTableItem from './games-table-item';

type GamesTableProps = {
    games: Game[];
};

const GamesTable = ({ games }: GamesTableProps = { games: [] }) => {
    return (
        <table className="w-full table-fixed">
            <thead>
                <tr>
                    <th className="w-72">Game</th>
                    <th className="hidden w-40 md:table-cell">Publish Status</th>
                    <th className="hidden w-44 lg:table-cell">Provider and Studio</th>
                    <th className="hidden w-28 text-right xl:table-cell">RTP</th>
                    <th className="hidden w-28 text-right xl:table-cell">Max. Win</th>
                    <th className="hidden w-48 xl:table-cell">Supported Coins</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <GamesTableItem key={game.id} game={game} />
                ))}
            </tbody>
        </table>
    );
};

export default GamesTable;

