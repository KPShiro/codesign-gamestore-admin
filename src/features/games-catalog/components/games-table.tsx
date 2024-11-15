import { Game } from '../models/game';
import GamesTableItem from './games-table-item';

type GamesTableProps = {
    games: Game[];
};

const GamesTable = ({ games }: GamesTableProps = { games: [] }) => {
    return (
        <table className="w-full table-fixed">
            <thead>
                <tr>
                    <th>Details</th>
                    <th className="w-32 lg:w-40">Status</th>
                    <th className="hidden w-40 lg:table-cell">Provider and Studio</th>
                    <th className="hidden w-24 text-right lg:table-cell">RTP</th>
                    <th className="hidden w-24 text-right lg:table-cell">Max. Win</th>
                    <th className="hidden w-32 lg:table-cell">Coins</th>
                    <th className="w-20"></th>
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
