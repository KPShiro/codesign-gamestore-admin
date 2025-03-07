import type { Meta, StoryObj } from '@storybook/react';
import Slider from './slider';

const meta = {
    title: 'Slider',
    component: Slider,
    tags: ['autodocs'],
    decorators: (Story) => (
        <div className="w-80">
            <Story />
        </div>
    ),
    args: {
        defaultValue: [50],
        max: 100,
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const MultipleValues: Story = {
    args: {
        defaultValue: [20, 80],
        max: 100,
    },
};
