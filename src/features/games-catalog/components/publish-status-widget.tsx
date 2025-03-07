import { FilledBadge } from '@/components/badge';
import { Game } from '@features/games-catalog/models/game';
import { useEffect, useState } from 'react';

type PublishStatusWidgetProps = {
    status: Game['publishStatus'];
};

const PublishStatusWidget = ({ status }: PublishStatusWidgetProps) => {
    const [text, setText] = useState<string>('Unknown');
    const [color, setColor] =
        useState<React.ComponentProps<typeof FilledBadge>['color']>('neutral');

    useEffect(() => {
        switch (status) {
            case 'NOT_PUBLISHED':
                setColor('neutral');
                setText('Not Published');
                break;
            case 'TESTING':
                setColor('warning');
                setText('Testing');
                break;
            case 'PUBLISHED':
                setColor('success');
                setText('Published');
                break;
            default:
                setColor('neutral');
                setText('Unknown');
                break;
        }
    }, [status]);

    return <FilledBadge color={color} text={text} />;
};

export default PublishStatusWidget;
