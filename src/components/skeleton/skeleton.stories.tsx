import { cn } from '@/utils';
import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './skeleton';

const meta = {
    title: 'Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    decorators: (Story) => (
        <div className="flex w-80 flex-col gap-4">
            <Story />
        </div>
    ),
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
    render: (args) => {
        return <Skeleton {...args} className={cn('h-10', args.className)} />;
    },
};

export const Multiple: Story = {
    render: (args) => {
        return (
            <>
                <Skeleton {...args} className={cn('h-10 w-1/2', args.className)} />
                <Skeleton {...args} className={cn('h-10', args.className)} />
                <Skeleton {...args} className={cn('h-40', args.className)} />
            </>
        );
    },
};
