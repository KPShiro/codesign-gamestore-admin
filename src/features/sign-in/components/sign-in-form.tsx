import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const signInFormSchema = z.object({
    email: z.string().min(1).email(),
    password: z.string().min(1),
});

type SignInFormValue = z.infer<typeof signInFormSchema>;

type SignInFormProps = {
    actions?: React.ReactElement;
    loading?: boolean;
    onSubmit: (value: SignInFormValue) => void;
};

const SignInForm = ({ actions, loading, onSubmit }: SignInFormProps) => {
    const form = useForm<SignInFormValue>({
        resolver: zodResolver(signInFormSchema),
        disabled: loading,
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className="text-lg font-medium">Sign In</h1>
            <div className="flex flex-col gap-2">
                <Input
                    type="email"
                    placeholder="Enter email..."
                    disabled={form.formState.disabled}
                    {...form.register('email')}
                />
                <Input
                    type="password"
                    placeholder="Enter password..."
                    disabled={form.formState.disabled}
                    {...form.register('password')}
                />
            </div>
            <div className="flex flex-col gap-2">
                <Button
                    type="submit"
                    text="Sign In"
                    loading={form.formState.disabled}
                    disabled={form.formState.disabled || !form.formState.isValid}
                />
                {actions}
            </div>
        </form>
    );
};

export default SignInForm;
