import { useAuthState } from '@/state/auth';
import { isNotDefined } from '@/utils';
import { AuthProvider, AuthProviderCredentials } from '@features/sign-in/models/auth-provider';
import { AuthStrategy } from '@features/sign-in/models/auth-strategy';
import { EmailAuthStrategy } from '@features/sign-in/models/email-auth-strategy';
import { GoogleAuthStrategy } from '@features/sign-in/models/google-auth-strategy';
import { useToast } from '@features/toast';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthStrategies: Record<AuthProvider, AuthStrategy<any>> = {
    EMAIL: EmailAuthStrategy,
    GOOGLE: GoogleAuthStrategy,
};

export const useAuth = () => {
    const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
    const authState = useAuthState();
    const navigate = useNavigate();
    const toast = useToast();

    const signIn = useCallback(async (credentials: AuthProviderCredentials) => {
        const authStrategy = AuthStrategies[credentials.provider];

        if (isNotDefined(authStrategy)) {
            throw new Error('AuthStrategy not supported!');
        }

        try {
            setIsAuthenticating(true);
            const token = await authStrategy.signIn(credentials);
            authState.setToken(token);
            navigate('/');
        } catch {
            toast.show({
                variant: 'danger',
                title: 'Invalid user credentials',
                description: 'Please verify your email or password.',
            });
        } finally {
            setIsAuthenticating(false);
        }
    }, []);

    const signOut = useCallback(() => {
        authState.setToken(null);
        navigate('/sign-in');
    }, []);

    return {
        isAuthenticating,
        signIn,
        signOut,
    };
};
