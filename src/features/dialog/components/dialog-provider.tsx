import { useCallback, useState } from 'react';
import { DialogContext } from '../hooks/use-dialog';
import Dialog from './dialog';

const DialogProvider = ({ children }: React.PropsWithChildren) => {
    const [dialogContent, setDialogContent] = useState<React.ReactElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = useCallback((component: React.ReactElement) => {
        setDialogContent(component);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        setDialogContent(null);
    }, []);

    const handleOnOpenChange = useCallback((isOpen: boolean) => {
        setIsOpen(isOpen);

        if (!isOpen) {
            setDialogContent(null);
        }
    }, []);

    return (
        <DialogContext.Provider value={{ open, close }}>
            {children}
            <Dialog open={isOpen} onOpenChange={handleOnOpenChange}>
                {dialogContent}
            </Dialog>
        </DialogContext.Provider>
    );
};

export default DialogProvider;
