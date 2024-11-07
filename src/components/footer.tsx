import { cn } from '@/utils';

const Footer = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <footer {...props} className={cn('border-t text-muted-foreground', className)}>
        <div className="container flex justify-between py-6">
            <p className="text-xs">Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
            <p className="text-xs">v1.0.0</p>
        </div>
    </footer>
);

export default Footer;
