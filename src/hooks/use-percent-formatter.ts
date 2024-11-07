import { useBrowserLocale } from './use-browser-locale';

export const usePercentFormatter = () => {
    const locale = useBrowserLocale();

    return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
