import { usePermissions } from '@/hooks/use-permissions';
import Button from '@components/ui/button';
import { useDialog } from '@features/dialog';
import React from 'react';
import CreateGameDialog from './create-game-dialog';

type CreateGameButtonProps = Pick<React.ComponentProps<typeof Button>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const { hasPermissions } = usePermissions();
    const dialog = useDialog();

    return (
        <Button
            {...props}
            text="Add Game"
            disabled={!hasPermissions(['Game.Create'])}
            onClick={() => dialog.open(<CreateGameDialog />)}
        />
    );
};

export default CreateGameButton;
