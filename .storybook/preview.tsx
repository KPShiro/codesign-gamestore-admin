import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';

import '../src/index.css';

const preview: Preview = {
    decorators: [
        // TODO: Theme changes but Storybook background stays the same... find a fix!!!
        withThemeByClassName({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'centered',
    },
};

export default preview;
