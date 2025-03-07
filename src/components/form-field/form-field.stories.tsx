import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './form-field';

const meta = {
    title: 'Form Field/Field',
    component: FormField,
    tags: ['autodocs'],
    decorators: (Story) => (
        <div className="w-80">
            <Story />
        </div>
    ),
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

const label = 'Email address';
const message = 'System notifications will be sent here';

const PlaceholderComponent = () => {
    return <div className="bg-on-surface/5 h-10 rounded-md" />;
};

export const Default: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <FormField.Label>{label}</FormField.Label>
                <PlaceholderComponent />
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
                <PlaceholderComponent />
            </FormField>
        );
    },
};

export const OnlyMessage: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <PlaceholderComponent />
                <FormField.Message>{message}</FormField.Message>
            </FormField>
        );
    },
};
