import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './sidebar';

const meta = {
    title: 'Sidebar/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: (Story) => {
        return (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        );
    },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        return (
            <div className="h-80">
                <Sidebar {...args} />
            </div>
        );
    },
};

export const TooSmallContainer: Story = {
    render: (args) => {
        return (
            <div className="h-30">
                <Sidebar {...args} />
            </div>
        );
    },
};
