type PageWrapperProps = Pick<React.ComponentProps<'div'>, 'children'> & {};

const PageWrapper = ({ children }: PageWrapperProps) => {
    return <div className="grid gap-4 p-6">{children}</div>;
};

export default PageWrapper;
