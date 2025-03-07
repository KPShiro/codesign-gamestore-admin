import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextInput } from '.';

const meta = {
    title: 'Input/Text',
    component: TextInput,
    tags: ['autodocs'],
    decorators: (Story) => {
        return (
            <div className="w-80">
                <Story />
            </div>
        );
    },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Controlled: Story = {
    args: {
        value: 'Peter Parker',
        onValueChange: () => fn(),
    },
};

export const Invalid: Story = {
    args: {
        value: 'Peter Parker',
        onValueChange: () => fn(),
        invalid: true,
    },
};

export const Disabled: Story = {
    args: {
        value: 'Peter Parker',
        onValueChange: () => fn(),
        disabled: true,
    },
};
