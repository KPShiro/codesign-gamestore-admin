import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-primary text-center text-primary-foreground">
            <h1 className="text-xl font-medium">Oops, something went wrong.</h1>
            <p className="max-w-prose opacity-70">
                An unexpected error has occurred, please try again in a moment. If the problem does
                not go away, please contact us.
            </p>
        </div>
    );
};

export default ErrorPage;
