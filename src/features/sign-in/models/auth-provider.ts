import { EmailStrategyCredentials } from '@features/sign-in/models/email-auth-strategy';

export type AuthProvider = 'EMAIL' | 'GOOGLE';

export type AuthProviderCredentials =
    | {
          provider: 'EMAIL';
          credentials: EmailStrategyCredentials;
      }
    | {
          provider: 'GOOGLE';
      };
