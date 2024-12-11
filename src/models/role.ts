export const Roles = ['ADMIN', 'MANAGER', 'USER'] as const;
export type Role = (typeof Roles)[number];
