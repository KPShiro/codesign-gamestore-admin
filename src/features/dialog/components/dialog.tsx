/* eslint-disable react/prop-types */

import { cn } from '@/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import React from 'react';

const Dialog = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) => {
    return <DialogPrimitive.Root {...props} />;
};

const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            'bg-on-surface/80 fixed inset-0 z-50 backdrop-blur-sm',
            'data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in',
            className
        )}
        {...props}
    />
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                'fixed inset-0 z-50 m-auto h-fit w-fit',
                'data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in',
                className
            )}
            {...props}
        >
            <div className="bg-surface relative grid w-screen max-w-lg rounded-md border shadow-lg">
                {children}
            </div>
        </DialogPrimitive.Content>
    </DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'flex flex-col-reverse gap-2 border-t p-6 sm:flex-row sm:justify-end',
            className
        )}
        {...props}
    />
);

DialogFooter.displayName = 'DialogFooter';

const DialogBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('flex max-h-[60vh] flex-col gap-3 overflow-y-auto border-t p-6', className)}
        {...props}
    />
);

DialogBody.displayName = 'DialogBody';

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('flex max-w-prose flex-col gap-y-1.5 p-6', className)} {...props} />
);

DialogHeader.displayName = 'DialogHeader';

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn('text-lg leading-none font-semibold tracking-tight', className)}
        {...props}
    />
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn('text-on-surface/60 max-w-prose text-sm', className)}
        {...props}
    />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

Dialog.Close = DialogClose;
Dialog.Content = DialogContent;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Body = DialogBody;
Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Trigger = DialogTrigger;

export default Dialog;
