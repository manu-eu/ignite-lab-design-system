import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button ({ children, asChild = false }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'
    return (
        <Comp
            className={clsx(`
                w-full py-4 px-4 rounded
                bg-cyan-500 hover:bg-cyan-300
                focus:ring-2 ring-white outline-none
                font-semibold text-sm transition-colors
            `)}
        >
            {children}
        </Comp>
    );
}