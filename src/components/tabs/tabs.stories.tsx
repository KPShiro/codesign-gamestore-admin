import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './tabs';

const tabs = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        content: 'Dashboard Content',
    },
    {
        id: 'profile',
        label: 'Profile',
        content: 'Profile Content',
    },
    {
        id: 'settings',
        label: 'Settings',
        content: 'Settings Content',
    },
];

const meta = {
    title: 'Tabs',
    component: Tabs,
    tags: ['autodocs'],
    decorators: (Story) => (
        <div className="w-96">
            <Story />
        </div>
    ),
    args: {
        defaultValue: 'dashboard',
    },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        return (
            <Tabs {...args}>
                <Tabs.List>
                    {tabs.map((tab) => (
                        <Tabs.Trigger key={tab.id} value={tab.id}>
                            {tab.label}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
                {tabs.map((tab) => (
                    <Tabs.Content key={tab.id} value={tab.id}>
                        {tab.content}
                    </Tabs.Content>
                ))}
            </Tabs>
        );
    },
};

export const Styled: Story = {
    render: (args) => {
        return (
            <Tabs {...args} className="overflow-clip rounded-md border">
                <Tabs.List className="bg-surface-container">
                    {tabs.map((tab) => (
                        <Tabs.Trigger key={tab.id} value={tab.id}>
                            {tab.label}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
                <div className="bg-surface p-4">
                    {tabs.map((tab) => (
                        <Tabs.Content key={tab.id} value={tab.id}>
                            {tab.content}
                        </Tabs.Content>
                    ))}
                </div>
            </Tabs>
        );
    },
};
