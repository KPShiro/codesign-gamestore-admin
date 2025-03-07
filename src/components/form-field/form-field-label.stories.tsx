import type { Meta, StoryObj } from '@storybook/react';
import { FormFieldLabel } from './form-field-label';

const meta = {
    title: 'Form Field/Label',
    component: FormFieldLabel,
    tags: ['autodocs'],
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
