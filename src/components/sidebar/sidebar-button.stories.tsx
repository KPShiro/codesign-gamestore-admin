import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from 'lucide-react';
import { MemoryRouter } from 'react-router-dom';
import SidebarButton from './sidebar-button';

const meta = {
    title: 'Sidebar/Button',
    component: SidebarButton,
    tags: ['autodocs'],
    args: {
        to: 'add-item',
        icon: PlusIcon,
        text: 'Add item',
    },
    decorators: (Story) => {
        return (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        );
    },
} satisfies Meta<typeof SidebarButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
    args: {
        to: '',
    },
};
