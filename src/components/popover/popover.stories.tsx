import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './index';

const meta = {
    title: 'Popover',
    component: Popover,
    tags: ['autodocs'],
    render: (args) => {
        return (
            <Popover {...args}>
                <Popover.Trigger asChild>
                    <button className="bg-on-surface/5 hover:bg-on-surface/10 active:bg-on-surface/15 flex h-10 items-center justify-center gap-2 rounded-md px-4">
                        <span className="text-sm font-medium">Click to read more</span>
                    </button>
                </Popover.Trigger>
                <Popover.Content>
                    <div className="max-w-sm p-4 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus non
                        accusamus ullam blanditiis alias, molestias debitis libero? Animi laborum
                        delectus itaque! Asperiores itaque enim reiciendis dolor, architecto
                        temporibus quisquam?
                    </div>
                </Popover.Content>
            </Popover>
        );
    },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
