import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PlusIcon, SparklesIcon } from 'lucide-react';
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
            mapping: {
                plus: PlusIcon,
            },
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

export const Text: Story = {
    args: {
        text: 'Button',
    },
};

export const Icon: Story = {
    args: {
        icon: SparklesIcon,
        text: 'Button',
    },
};
