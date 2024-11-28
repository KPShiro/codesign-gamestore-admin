import StatusWidget from '@/components/status-widget/status-widget';
import { Game } from '@features/games-catalog/models/game';
import { useEffect, useState } from 'react';

type GamePublishStatusWidgetProps = {
    status: Game['publishStatus'];
};

const GamePublishStatusWidget = ({ status }: GamePublishStatusWidgetProps) => {
    const [text, setText] = useState<string>('Unknown');
    const [variant, setVariant] =
        useState<React.ComponentProps<typeof StatusWidget>['variant']>('muted');

    useEffect(() => {
        switch (status) {
            case 'NOT_PUBLISHED':
                setVariant('muted');
                setText('Not Published');
                break;
            case 'TESTING':
                setVariant('warning');
                setText('Testing');
                break;
            case 'PUBLISHED':
                setVariant('success');
                setText('Published');
                break;
            default:
                setVariant('muted');
                setText('Unknown');
                break;
        }
    }, [status]);

    return <StatusWidget variant={variant} text={text} />;
};

export default GamePublishStatusWidget;

