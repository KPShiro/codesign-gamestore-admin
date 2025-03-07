import type { Meta, StoryObj } from '@storybook/react';
import Select from './select';

type Option = {
    value: string;
    group: string;
    label: string;
};

const options: Option[] = [
    {
        value: 'a',
        group: 'primary',
        label: 'Option A',
    },
    {
        value: 'b',
        group: 'primary',
        label: 'Option B',
    },
    {
        value: 'c',
        group: 'secondary',
        label: 'Option C',
    },
    {
        value: 'd',
        group: 'secondary',
        label: 'Option D',
    },
];

const meta = {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
    decorators: (Story) => (
        <div className="w-80">
            <Story />
        </div>
    ),
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Trigger placeholder="Select option" />
                <Select.Content>
                    {options.map((option) => (
                        <Select.Item key={option.value} value={option.value}>
                            {option.label}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select>
        );
    },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Controlled: Story = {
    args: {
        value: 'a',
    },
};

export const Invalid: Story = {
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Trigger placeholder="Select option" invalid />
                <Select.Content>
                    {options.map((option) => (
                        <Select.Item key={option.value} value={option.value}>
                            {option.label}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select>
        );
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};

export const WithGroups: Story = {
    render: (args) => {
        const groups = options.reduce<Record<string, Option[]>>((groups, option) => {
            if (!groups[option.group]) {
                groups[option.group] = [];
            }

            groups[option.group].push(option);
            return groups;
        }, {});

        return (
            <Select {...args}>
                <Select.Trigger placeholder="Select option" />
                <Select.Content>
                    {Object.entries(groups).map(([key, options]) => (
                        <Select.Group key={key}>
                            <Select.Label className="uppercase">{key}</Select.Label>
                            {options.map((option) => (
                                <Select.Item key={option.value} value={option.value}>
                                    {option.label}
                                </Select.Item>
                            ))}
                        </Select.Group>
                    ))}
                </Select.Content>
            </Select>
        );
    },
};
