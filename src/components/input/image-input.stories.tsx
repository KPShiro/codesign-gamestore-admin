import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ImageInput from './image-input';

const meta = {
    title: 'Input/Image',
    component: ImageInput,
    tags: ['autodocs'],
    decorators: (Story) => (
        <div className="w-80">
            <Story />
        </div>
    ),
} satisfies Meta<typeof ImageInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const WithValue: Story = {
    args: {
        value: new File([''], 'image.svg', { type: 'image/jpeg' }),
        onValueChange: () => fn(),
    },
};

export const Invalid: Story = {
    args: {
        invalid: true,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
