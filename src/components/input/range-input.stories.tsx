import type { Meta, StoryObj } from '@storybook/react';
import { RangeInput } from '.';

const meta = {
    title: 'Input/Range',
    component: RangeInput,
    tags: ['autodocs'],
    args: {
        defaultValue: [50],
    },
    decorators: (Story) => {
        return (
            <div className="w-80">
                <Story />
            </div>
        );
    },
} satisfies Meta<typeof RangeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomStep: Story = {
    args: {
        step: 10,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const Range: Story = {
    args: {
        defaultValue: [20, 80],
    },
};

export const RangeWithCustomStep: Story = {
    args: {
        defaultValue: [20, 80],
        minStepsBetweenThumbs: 1,
        step: 10,
    },
};
