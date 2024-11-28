import type { Meta, StoryObj } from '@storybook/react';
import StatusWidget from './status-widget';

const meta = {
    title: 'UI/Status Widget',
    component: StatusWidget,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['filled', 'outlined'],
        },
        color: {
            control: 'select',
            options: ['muted', 'primary', 'success', 'warning', 'danger'],
        },
    },
} satisfies Meta<typeof StatusWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Lorem Ipsum',
    },
};
