import { useAuthState } from '@/state/auth';
import { isNotDefined } from '@/utils';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type AuthRouteProps = React.PropsWithChildren;

const AuthRoute = ({ children }: AuthRouteProps) => {
    const { token } = useAuthState();
    const location = useLocation();

    if (isNotDefined(token)) {
        return <Navigate to={'/sign-in'} state={{ from: location }} replace />;
    }

    return children;
};

export default AuthRoute;
