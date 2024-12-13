import { AuthStrategy } from '@features/sign-in/models/auth-strategy';

export type EmailStrategyCredentials = {
    email: string;
    password: string;
};

export const EmailAuthStrategy: AuthStrategy<EmailStrategyCredentials> = {
    signIn: (credentials: EmailStrategyCredentials) => {
        return new Promise<string>((res) => {
            setTimeout(() => {
                res(
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIwMDAwLTAwMDAtMDAwMC0wMDAwIiwiZmlzdE5hbWUiOiJQZXRlciIsImxhc3ROYW1lIjoiUGFya2VyIiwiZW1haWwiOiJwZXRlci5wYWtlckBjb21wYW55LmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.i9Xe31DP8PFqz7sg-fD640g_etd3rHcqRKXaFofztz4'
                );
            }, 1000);
        });
    },
};
