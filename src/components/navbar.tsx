import Button from '@/components/ui/button';
import { cn } from '@/utils';
import { BellIcon, SettingsIcon } from 'lucide-react';

const Navbar = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <nav {...props} className={cn('border-b bg-background', className)}>
        <div className="container flex h-16 items-center justify-between">
            <div className="select-none space-x-1.5 text-sm text-primary">
                <span className="font-bold uppercase">Codesign</span>
                <span>Gamestore</span>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="outlined" shape="square" iconLeft={<BellIcon size={16} />} />
                <Button variant="outlined" shape="square" iconLeft={<SettingsIcon size={16} />} />
                <div className="mx-2 h-2 w-px bg-primary/15"></div>
                <Button variant="outlined" text="Sign out" />
            </div>
        </div>
    </nav>
);

export default Navbar;
