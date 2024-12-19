import { isDefined } from '@/utils';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFilters = <T,>() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState<Partial<T>>({});
    const [isFiltering, setIsFiltering] = useState<boolean>(false);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const filters = Object.fromEntries([...params.entries()]) as Partial<T>;
        setIsFiltering(params.size > 0);
        setFilters(filters);
    }, [searchParams]);

    const get = useCallback(
        (key: keyof T) => {
            const value = searchParams.get(String(key));
            return value !== null ? (value as T[keyof T]) : null;
        },
        [searchParams]
    );

    const update = useCallback(
        (key: keyof T, value: T[keyof T] | null) => {
            const params = new URLSearchParams(searchParams);

            if (isDefined(value)) {
                params.set(String(key), String(value));
            } else {
                params.delete(String(key));
            }

            setSearchParams(params);
        },
        [searchParams]
    );

    const clear = useCallback(() => {
        setSearchParams(new URLSearchParams());
    }, []);

    return {
        filters,
        isFiltering,
        get,
        update,
        clear,
    };
};
