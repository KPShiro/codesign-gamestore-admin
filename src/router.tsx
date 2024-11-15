import DefaultLayout from '@components/default-layout';
import ErrorPage from '@components/error-page';
import { GamesCatalog } from '@features/games-catalog';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <DefaultLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Navigate to="catalog" />,
                },
                {
                    path: 'catalog',
                    element: <GamesCatalog />,
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/" />,
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
