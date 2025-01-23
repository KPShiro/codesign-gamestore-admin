import type { Meta, StoryObj } from '@storybook/react';
import { SaveIcon } from 'lucide-react';
import { Icon } from '.';
import { IconSizes } from './icon';

const meta = {
    title: 'Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        icon: SaveIcon,
    },
    argTypes: {
        icon: {
            control: 'inline-check',
        },
        size: {
            control: 'select',
            options: IconSizes,
            table: {
                type: {
                    summary: IconSizes.join('|'),
                },
                defaultValue: {
                    summary: IconSizes[0],
                },
            },
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllSizes: Story = {
    render: (args) => {
        return (
            <div className="flex items-center gap-2">
                {IconSizes.map((size) => (
                    <Icon key={size} {...args} size={size} />
                ))}
            </div>
        );
    },
};
