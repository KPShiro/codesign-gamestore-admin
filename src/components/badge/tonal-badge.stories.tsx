import type { Meta, StoryObj } from '@storybook/react';
import { TonalBadge } from './tonal-badge';

const meta = {
    title: 'Badge/Tonal',
    component: TonalBadge,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select',
            options: ['neutral', 'primary', 'success', 'warning', 'danger'],
        },
    },
} satisfies Meta<typeof TonalBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

const text: string = 'Lorem Ipsum';

export const Neutral: Story = {
    args: {
        text: text,
        color: 'neutral',
    },
};

export const Primary: Story = {
    args: {
        text: text,
        color: 'primary',
    },
};

export const Success: Story = {
    args: {
        text: text,
        color: 'success',
    },
};

export const Warning: Story = {
    args: {
        text: text,
        color: 'warning',
    },
};

export const Danger: Story = {
    args: {
        text: text,
        color: 'danger',
    },
};
