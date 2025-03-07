export const ButtonVariants = ['primary', 'danger'] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

export const ButtonSizes = ['xs', 'sm', 'md'] as const;
export type ButtonSize = (typeof ButtonSizes)[number];
