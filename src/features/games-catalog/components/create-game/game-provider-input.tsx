import { Select } from '@/components/select';
import { Skeleton } from '@/components/skeleton';
import { isNotDefined } from '@/utils';
import { useGamesProviders } from '@features/games-catalog/hooks/use-games-providers';

type GameProviderInputProps = Omit<React.ComponentProps<typeof Select>, 'children'>;

const GameProviderInput = ({ ...props }: GameProviderInputProps) => {
    const { data: providers, isPending } = useGamesProviders();

    if (isPending) {
        return <Skeleton className="h-10" />;
    }

    return (
        <Select {...props} disabled={props.disabled || isNotDefined(providers)}>
            <Select.Trigger placeholder="Select provider" />
            <Select.Content>
                {providers?.map((provider) => (
                    <Select.Item key={provider.id} value={provider.id}>
                        {provider.name}
                    </Select.Item>
                ))}
            </Select.Content>
        </Select>
    );
};

export default GameProviderInput;
