import { Skeleton } from '@/components/skeleton';
import Select from '@/components/ui/select';
import { isNotDefined } from '@/utils';
import { useGamesStudios } from '@features/games-catalog/hooks/use-games-studios';

type GameStudioInputProps = Omit<React.ComponentProps<typeof Select>, 'children'>;

const GameStudioInput = ({ ...props }: GameStudioInputProps) => {
    const { data: studios, isPending } = useGamesStudios();

    if (isPending) {
        return <Skeleton className="h-10" />;
    }

    return (
        <Select {...props} disabled={props.disabled || isNotDefined(studios)}>
            <Select.Trigger placeholder="Select studio" />
            <Select.Content>
                {studios?.map((studio) => (
                    <Select.Item key={studio.id} value={studio.id}>
                        {studio.name}
                    </Select.Item>
                ))}
            </Select.Content>
        </Select>
    );
};

export default GameStudioInput;
