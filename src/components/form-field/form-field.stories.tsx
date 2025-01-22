import type { Meta, StoryObj } from '@storybook/react';
import Input from '../ui/input';
import { FormField } from './form-field';

const meta = {
    title: 'Forms/Form Field/Field',
    component: FormField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: (Story) => (
        <div className="w-80">
            <Story />
        </div>
    ),
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

const label = 'Email address';
const placeholder = 'natasha.romanov@avenvers.com';
const message = 'System notifications will be sent here';

export const Default: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <FormField.Label>{label}</FormField.Label>
                <Input placeholder={placeholder} />
                <FormField.Message>{message}</FormField.Message>
            </FormField>
        );
    },
};

export const OnlyLabel: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <FormField.Label>{label}</FormField.Label>
                <Input placeholder={placeholder} />
            </FormField>
        );
    },
};

export const OnlyMessage: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <Input placeholder={placeholder} />
                <FormField.Message>{message}</FormField.Message>
            </FormField>
        );
    },
};
