export type AuthStrategy<T> = {
    signIn: (credentials: T) => Promise<string>;
};
