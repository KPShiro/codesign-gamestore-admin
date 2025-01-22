import type { Meta, StoryObj } from '@storybook/react';
import { FormFieldLabel } from './form-field-label';

const meta = {
    title: 'Forms/Form Field/Label',
    component: FormFieldLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        children: 'Full Name',
    },
} satisfies Meta<typeof FormFieldLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
    args: {
        required: true,
    },
};
