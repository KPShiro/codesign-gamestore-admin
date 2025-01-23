import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PlusIcon } from 'lucide-react';
import { FilledButton } from './filled-button';
import { ButtonSizes, ButtonVariants } from './types';

const meta = {
    title: 'Buttons/Filled',
    component: FilledButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
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
                    summary: ButtonVariants[0],
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
                    summary: ButtonSizes[0],
                },
            },
        },
        icon: {
            control: 'inline-check',
        },
    },
} satisfies Meta<typeof FilledButton>;

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
