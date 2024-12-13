import Card from '@/components/card';
import Button from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import SignInForm from './sign-in-form';

const SignInPage = () => {
    const { signIn, isAuthenticating } = useAuth();

    return (
        <div className="flex h-dvh w-dvw flex-col items-center justify-center">
            <Card className="w-full max-w-80 gap-2">
                <SignInForm
                    loading={isAuthenticating}
                    onSubmit={(value) =>
                        signIn({
                            provider: 'EMAIL',
                            credentials: value,
                        })
                    }
                    actions={
                        <Button
                            variant="tonal"
                            text="Continue with Google"
                            disabled={isAuthenticating}
                            onClick={() => signIn({ provider: 'GOOGLE' })}
                        />
                    }
                />
            </Card>
        </div>
    );
};

export default SignInPage;
