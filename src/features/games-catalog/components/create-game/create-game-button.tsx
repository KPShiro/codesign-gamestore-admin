import { FilledButton } from '@/components/buttons';
import { usePermissions } from '@/hooks/use-permissions';
import { useDialog } from '@features/dialog';
import React from 'react';
import CreateGameDialog from './create-game-dialog';

type CreateGameButtonProps = Pick<React.ComponentProps<typeof FilledButton>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const { hasPermissions } = usePermissions();
    const dialog = useDialog();

    return (
        <FilledButton
            {...props}
            text="Add Game"
            disabled={!hasPermissions(['Game.Create'])}
            onClick={() => dialog.open(<CreateGameDialog />)}
        />
    );
};

export default CreateGameButton;
