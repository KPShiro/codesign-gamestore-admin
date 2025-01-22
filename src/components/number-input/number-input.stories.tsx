import type { Meta, StoryObj } from '@storybook/react';
import NumberInput from './number-input';

const meta = {
    title: 'Forms/Number Input',
    component: NumberInput,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: (Story) => (
        <div className="w-80">
            <Story />
        </div>
    ),
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Valid: Story = {
    args: {
        value: 100,
    },
};

export const Invalid: Story = {
    args: {
        value: 100,
        invalid: true,
    },
};

export const Disabled: Story = {
    args: {
        value: 100,
        disabled: true,
    },
};
