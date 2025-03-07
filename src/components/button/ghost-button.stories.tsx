import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PlusIcon } from 'lucide-react';
import { GhostButton } from './ghost-button';
import { ButtonSizes, ButtonVariants } from './types';

const meta = {
    title: 'Button/Ghost',
    component: GhostButton,
    tags: ['autodocs'],
    args: {
        icon: PlusIcon,
        text: 'Create New',
        onClick: fn,
        color: 'primary',
    },
    argTypes: {
        loading: {
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        color: {
            control: 'select',
            options: ButtonVariants,
            table: {
                type: {
                    summary: ButtonVariants.join('|'),
                },
                defaultValue: {
                    summary: 'primary',
                },
            },
        },
        size: {
            control: 'select',
            options: ButtonSizes,
            table: {
                type: {
                    summary: ButtonSizes.join('|'),
                },
                defaultValue: {
                    summary: 'md',
                },
            },
        },
        icon: {
            control: 'inline-check',
        },
    },
} satisfies Meta<typeof GhostButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnlyText: Story = {
    args: {
        icon: undefined,
    },
};

export const OnlyIcon: Story = {
    args: {
        text: undefined,
    },
};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
