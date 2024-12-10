import PopoverMenu from '@components/popover-menu';
import Button from '@components/ui/button';
import { EditIcon, EllipsisIcon, EyeIcon, LucideProps, PlayIcon, TrashIcon } from 'lucide-react';

type ActionMenuItem = {
    icon?: React.ElementType<LucideProps>;
    label: string;
    isHidden: boolean;
    isDisabled: boolean;
    isProcessing: boolean;
    callback: () => Promise<void> | void;
};

type ActionMenuItemGroup = {
    options: ActionMenuItem[];
};

const GamesTableItemMenu = () => {
    const groups: ActionMenuItemGroup[] = [
        {
            options: [
                {
                    icon: PlayIcon,
                    label: 'Play Now',
                    isHidden: false,
                    isDisabled: false,
                    isProcessing: false,
                    callback: () => {
                        throw new Error('Not implemented!');
                    },
                },
            ],
        },
        {
            options: [
                {
                    icon: EyeIcon,
                    label: 'View details',
                    isHidden: false,
                    isDisabled: false,
                    isProcessing: false,
                    callback: () => {
                        throw new Error('Not implemented!');
                    },
                },
                {
                    icon: EditIcon,
                    label: 'Edit details',
                    isHidden: false,
                    isDisabled: true,
                    isProcessing: false,
                    callback: () => {
                        throw new Error('Not implemented!');
                    },
                },
            ],
        },
        {
            options: [
                {
                    icon: TrashIcon,
                    label: 'Remove',
                    isHidden: false,
                    isDisabled: true,
                    isProcessing: false,
                    callback: () => {
                        throw new Error('Not implemented!');
                    },
                },
            ],
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
                                callback={option.callback}
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

