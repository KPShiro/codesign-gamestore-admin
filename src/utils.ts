import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isNotDefined(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

export function isDefined<T = unknown>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
}

export function containsSearchString(source: string, search: string) {
    const trimmedSourceString = source.trim();
    const trimmedSearchString = search.trim();

    return new RegExp(trimmedSearchString, 'i').test(trimmedSourceString);
}

export const randomizeId = (length: number = 16) => {
    return Math.random()
        .toString(36)
        .slice(2, 2 + length);
};

export function getBrowserLocale(): string {
    return navigator.language ?? 'en-US';
}

export function formatNumber(value: number): string {
    const browserLocale = getBrowserLocale();
    const formatter = new Intl.NumberFormat(browserLocale, {
        style: 'decimal',
        maximumFractionDigits: 2,
    });

    return formatter.format(value);
}

export function formatPercent(value: number): string {
    const browserLocale = getBrowserLocale();
    const formatter = new Intl.NumberFormat(browserLocale, {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(value);
}

export function formatDateTime(date?: Date | number): string {
    const browserLocale = getBrowserLocale();
    const formatter = new Intl.DateTimeFormat(browserLocale, {
        dateStyle: 'full',
        timeStyle: 'short',
    });

    return formatter.format(date);
}
