import type { Meta, StoryObj } from '@storybook/react';
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

const Placeholder = () => {
    return (
        <div className="flex h-10 items-center rounded-md bg-muted px-3">
            <span className="text-xs text-muted-foreground">COMPONENT_PLACEHOLDER</span>
        </div>
    );
};

export const Default: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <FormField.Label>Lorem ipsum</FormField.Label>
                <Placeholder />
                <FormField.Message>Dolor sit amet et umbra dorcet</FormField.Message>
            </FormField>
        );
    },
};

export const OnlyLabel: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <FormField.Label>Lorem ipsum</FormField.Label>
                <Placeholder />
            </FormField>
        );
    },
};

export const OnlyMessage: Story = {
    render: (args) => {
        return (
            <FormField {...args}>
                <Placeholder />
                <FormField.Message>Dolor sit amet et umbra dorcet</FormField.Message>
            </FormField>
        );
    },
};
