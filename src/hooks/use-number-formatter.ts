import { useBrowserLocale } from './use-browser-locale';

export const useNumberFormatter = () => {
    const locale = useBrowserLocale();

    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
};
