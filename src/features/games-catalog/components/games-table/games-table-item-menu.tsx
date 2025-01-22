import { Action } from '@/hooks/use-action';
import PopoverMenu from '@components/popover-menu';
import Button from '@components/ui/button';
import { useDeleteGameAction } from '@features/games-catalog/actions/use-delete-game';
import { useEditGameAction } from '@features/games-catalog/actions/use-edit-game';
import { usePlayNowAction } from '@features/games-catalog/actions/use-play-now';
import { useViewGameAction } from '@features/games-catalog/actions/use-view-game';
import { Game } from '@features/games-catalog/models/game';
import { EllipsisIcon } from 'lucide-react';

type ActionMenuItemGroup = {
    options: Action[];
};

type GamesTableItemMenuProps = {
    game: Game;
};

const GamesTableItemMenu = ({ game }: GamesTableItemMenuProps) => {
    const groups: ActionMenuItemGroup[] = [
        {
            options: [usePlayNowAction(game.id)],
        },
        {
            options: [useViewGameAction(game.id), useEditGameAction(game.id)],
        },
        {
            options: [useDeleteGameAction(game.id, game.title)],
        },
    ];

    const getAvailableGroups = (): ActionMenuItemGroup[] => {
        return groups.reduce<ActionMenuItemGroup[]>((arr, item) => {
            const availableOptions = item.options.filter((option) => !option.isHidden);

            if (availableOptions.length === 0) {
                return arr;
            }

            return [
                ...arr,
                {
                    ...item,
                    options: [...availableOptions],
                },
            ];
        }, []);
    };

    return (
        <PopoverMenu>
            <PopoverMenu.Trigger asChild>
                <Button variant="text" size="sm" icon={EllipsisIcon} />
            </PopoverMenu.Trigger>
            <PopoverMenu.Options>
                {getAvailableGroups().map((group, index) => (
                    <PopoverMenu.Group key={`group-${index}`}>
                        {group.options.map((option, index) => (
                            <PopoverMenu.Option
                                key={`option-${index}`}
                                icon={option.icon}
                                label={option.label}
                                callback={option.execute}
                                isDisabled={option.isDisabled || option.isProcessing}
                                isProcessing={option.isProcessing}
                            />
                        ))}
                    </PopoverMenu.Group>
                ))}
            </PopoverMenu.Options>
        </PopoverMenu>
    );
};

export default GamesTableItemMenu;
