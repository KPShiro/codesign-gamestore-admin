import type { Meta, StoryObj } from '@storybook/react';
import { FormFieldMessage, FormFieldMessageTypes } from './form-field-message';

const meta = {
    title: 'Form Field/Message',
    component: FormFieldMessage,
    tags: ['autodocs'],
    args: {
        children: 'Lorem ipsum dolor sit amet',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: FormFieldMessageTypes,
            table: {
                type: {
                    summary: FormFieldMessageTypes.join('|'),
                },
                defaultValue: {
                    summary: FormFieldMessageTypes[0],
                },
            },
        },
    },
} satisfies Meta<typeof FormFieldMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        variant: 'info',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
    },
};
