import { cn } from '@/utils';
import { Game } from '@features/games-catalog/models/game';
import { GameCoins, GameCoinsLabels } from '@features/games-catalog/models/game-coin';

type SupportedCoinsWidgetProps = {
    coins: Game['coins'];
};

const SupportedCoinsWidget = ({ coins }: SupportedCoinsWidgetProps) => {
    return (
        <div className="flex h-7 items-center gap-0.5 rounded-md border p-0.5">
            {GameCoins.map((coin) => (
                <div
                    key={coin}
                    className={cn(
                        'flex h-full flex-1 items-center justify-center text-xs text-muted-foreground first-of-type:rounded-l-sm last-of-type:rounded-r-sm',
                        coins.find((item) => item === coin) && 'bg-primary/10 text-primary'
                    )}
                >
                    {GameCoinsLabels.get(coin)}
                </div>
            ))}
        </div>
    );
};

export default SupportedCoinsWidget;
