import DefaultLayout from '@components/default-layout';
import ErrorPage from '@components/error-page';
import { GamesCatalog } from '@features/games-catalog';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <DefaultLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <GamesCatalog />,
                },
            ],
        },
    ],
    {
        future: {
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_relativeSplatPath: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);
