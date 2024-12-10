import { Permission } from '@/models/permission';
import { useCallback } from 'react';

export const usePermissions = () => {
    const permissions: Permission[] = ['Game.Create', 'Game.Read', 'Game.Update', 'Game.Delete'];

    const hasPermissions = useCallback(
        (requiredPermissions: Permission[]) => {
            return requiredPermissions.every((permission) => permissions.includes(permission));
        },
        [permissions]
    );

    return {
        permissions,
        hasPermissions,
    };
};
