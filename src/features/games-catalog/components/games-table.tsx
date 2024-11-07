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
                    <th className="w-40">Status</th>
                    <th className="w-40">Provider and Studio</th>
                    <th className="w-24 text-right">RTP</th>
                    <th className="w-24 text-right">Max. Win</th>
                    <th className="w-40">Supported Coins</th>
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
