import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './button';

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        onClick: fn(),
    },
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['filled', 'tonal', 'outlined', 'text'],
        },
        icon: {
            control: 'select',
            options: [undefined, 'plus'],
        },
        disabled: {
            control: 'boolean',
        },
        loading: {
            control: 'boolean',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
    args: {
        variant: 'filled',
        text: 'Button',
    },
};

export const Tonal: Story = {
    args: {
        variant: 'tonal',
        text: 'Button',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        text: 'Button',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
        text: 'Button',
    },
};
