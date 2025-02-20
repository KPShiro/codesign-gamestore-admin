import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PlusIcon } from 'lucide-react';
import { OutlinedButton } from './outlined-button';
import { ButtonSizes, ButtonVariants } from './types';

const meta = {
    title: 'Buttons/Outlined',
    component: OutlinedButton,
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
} satisfies Meta<typeof OutlinedButton>;

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
