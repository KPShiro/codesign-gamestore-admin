import Tag from '@/components/ui/tag';
import { useMemo } from 'react';
import { Game } from '../models/game';

type GameTagsWidgetProps = {
    tags: Game['tags'];
    maxCount?: number;
};

const GameTagsWidget = ({ tags, maxCount }: GameTagsWidgetProps) => {
    const moreItemsCount = useMemo(() => tags.length - (maxCount ?? 0), [tags, maxCount]);

    if (tags.length === 0) {
        return <div className="text-muted-foreground">Tags not added</div>;
    }

    return (
        <div className="flex max-w-56 flex-wrap gap-1">
            {tags.slice(0, maxCount).map((tag) => (
                <Tag key={tag} variant="tonal" text={tag} />
            ))}
            {maxCount && <Tag variant="tonal" text={`+${moreItemsCount.toString()} more`} />}
        </div>
    );
};

export default GameTagsWidget;
