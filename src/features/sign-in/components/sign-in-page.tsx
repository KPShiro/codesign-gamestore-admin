import Card from '@/components/card';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/hooks/use-auth';
import { Loader2Icon } from 'lucide-react';
import SignInForm from './sign-in-form';

const SignInPage = () => {
    const { signIn, isAuthenticating } = useAuth();

    return (
        <div className="flex h-dvh w-dvw flex-col items-center justify-center bg-foreground/5">
            {isAuthenticating ? (
                <div className="flex items-center justify-center text-foreground/50">
                    <Icon icon={Loader2Icon} size={20} strokeWidth={2} className="animate-spin" />
                </div>
            ) : (
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
            )}
        </div>
    );
};

export default SignInPage;
