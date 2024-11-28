import StatusWidget from '@/components/ui/status-widget';
import { Game } from '@features/games-catalog/models/game';
import { useEffect, useState } from 'react';

type PublishStatusWidgetProps = {
    status: Game['publishStatus'];
};

const PublishStatusWidget = ({ status }: PublishStatusWidgetProps) => {
    const [text, setText] = useState<string>('Unknown');
    const [color, setColor] = useState<React.ComponentProps<typeof StatusWidget>['color']>('muted');

    useEffect(() => {
        switch (status) {
            case 'NOT_PUBLISHED':
                setColor('muted');
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
                setColor('muted');
                setText('Unknown');
                break;
        }
    }, [status]);

    return <StatusWidget variant={'outlined'} color={color} text={text} />;
};

export default PublishStatusWidget;
