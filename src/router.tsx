import ErrorPage from '@components/error-page';
import DefaultLayout from '@components/layouts/default-layout';
import { GamesCatalogPage } from '@features/games-catalog';
import AuthRoute from '@features/sign-in/components/auth-route';
import SignInPage from '@features/sign-in/components/sign-in-page';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <AuthRoute>
                    <DefaultLayout />
                </AuthRoute>
            ),
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Navigate to="catalog" />,
                },
                {
                    path: 'catalog',
                    element: <GamesCatalogPage />,
                },
            ],
        },
        {
            path: 'sign-in',
            element: <SignInPage />,
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
