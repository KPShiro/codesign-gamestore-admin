import StatusWidget, { StatusWidgetProps } from '@/components/status-widget/status-widget';
import { useMemo } from 'react';
import { Game } from '../models/game';

type GamePublishStatusWidgetProps = {
    status: Game['publishStatus'];
};

const GamePublishStatusWidget = ({ status }: GamePublishStatusWidgetProps) => {
    const variant: StatusWidgetProps['variant'] = useMemo(() => {
        switch (status) {
            case 'NEW':
                return 'primary';
            case 'TESTING':
                return 'warning';
            case 'PUBLISHED':
                return 'success';
            default:
                return 'muted';
        }
    }, [status]);

    const text: string = useMemo(() => {
        switch (status) {
            case 'NEW':
                return 'New';
            case 'ARCHIVED':
                return 'Archived';
            case 'TESTING':
                return 'Testing';
            case 'PUBLISHED':
                return 'Published';
            default:
                return 'UNKNOWN';
        }
    }, [status]);

    return <StatusWidget variant={variant} text={text} />;
};

export default GamePublishStatusWidget;
