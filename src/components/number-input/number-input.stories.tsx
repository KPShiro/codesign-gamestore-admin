import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import NumberInput from './number-input';

const meta = {
    title: 'Forms/Inputs/Number',
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

export const WithValue: Story = {
    args: {
        value: 100,
        onValueChange: () => fn(),
    },
};

export const Invalid: Story = {
    args: {
        value: 100,
        onValueChange: () => fn(),
        invalid: true,
    },
};

export const Disabled: Story = {
    args: {
        value: 100,
        onValueChange: () => fn(),
        disabled: true,
    },
};
