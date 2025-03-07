import type { Meta, StoryObj } from '@storybook/react';
import { Thumbnail } from '.';

const meta = {
    title: 'Thumbnail',
    component: Thumbnail,
    tags: ['autodocs'],
    args: {
        src: 'https://placehold.co/400',
        alt: 'Lorem Ipsum',
        size: 'md',
    },
} satisfies Meta<typeof Thumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
    render: (args) => {
        return (
            <div className="flex gap-2">
                <Thumbnail src={args.src} alt={args.alt} size="sm" />
                <Thumbnail src={args.src} alt={args.alt} size="md" />
                <Thumbnail src={args.src} alt={args.alt} size="lg" />
                <div className="w-32">
                    <Thumbnail src={args.src} alt={args.alt} size="full" />
                </div>
            </div>
        );
    },
};
