import { TonalButton } from '@/components/button';
import { Card } from '@/components/card';
import { useAuth } from '@/hooks/use-auth';
import { Icon } from '@components/icon';
import { Loader2Icon } from 'lucide-react';
import SignInForm from './sign-in-form';

const SignInPage = () => {
    const { signIn, isAuthenticating } = useAuth();

    return (
        <div className="bg-foreground/5 flex h-dvh w-dvw flex-col items-center justify-center">
            {isAuthenticating ? (
                <div className="text-foreground/50 flex items-center justify-center">
                    <Icon icon={Loader2Icon} size={20} strokeWidth={2} className="animate-spin" />
                </div>
            ) : (
                <Card className="w-full max-w-80 gap-2 p-6">
                    <SignInForm
                        loading={isAuthenticating}
                        onSubmit={(value) =>
                            signIn({
                                provider: 'EMAIL',
                                credentials: value,
                            })
                        }
                        actions={
                            <TonalButton
                                text="Continue with Google"
                                disabled={isAuthenticating}
                                onClick={() => signIn({ provider: 'GOOGLE' })}
                            />
                        }
                    />
                </Card>
            )}
        </div>
    );
};

export default SignInPage;
