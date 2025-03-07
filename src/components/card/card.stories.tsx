import { cn } from '@/utils';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta = {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    decorators: (Story) => (
        <div className="w-80">
            <Story />
        </div>
    ),
    render: (args) => {
        return (
            <Card {...args} className={cn('p-4', args.className)}>
                <div className="flex flex-col items-center justify-center text-center">
                    CONTENT_GOES_HERE
                </div>
            </Card>
        );
    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
    args: {
        mode: 'interactive',
    },
};

export const Example: Story = {
    args: {
        mode: 'interactive',
    },
    render: (args) => {
        return (
            <Card {...args} className={cn('flex flex-col gap-4 p-4', args.className)}>
                <div className="bg-on-surface/5 size-24 rounded-md"></div>
                <div className="flex flex-col gap-1">
                    <h5 className="font-medium">Lorem Ipsum Dolor Sit Amet</h5>
                    <p className="text-on-surface/60 text-sm">
                        Consectetur adipisicing elit. Culpa ut hic eum similique sit vitae porro
                        inventore commodi architecto, quasi voluptas ab optio molestias tempore quod
                        aut tenetur vero at.
                    </p>
                </div>
            </Card>
        );
    },
};
