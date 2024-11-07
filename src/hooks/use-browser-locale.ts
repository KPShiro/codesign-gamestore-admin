import { useEffect, useState } from 'react';

export const useBrowserLocale = () => {
    const DEFAULT_LOCALE: string = 'en-US';
    const [locale, setLocale] = useState<string>(DEFAULT_LOCALE);

    useEffect(() => {
        setLocale(navigator.language || DEFAULT_LOCALE);
    }, []);

    return locale;
};
