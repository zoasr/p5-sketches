import * as React from "react";
import { cn } from "../../lib/cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "h-10 w-full rounded-xl border border-white/10",
                "bg-white/5 px-3 text-sm text-white/90 placeholder:text-white/40",
                "shadow-md focus:border-accent-red/35 focus:outline-none focus:ring-2 focus:ring-accent-red/25",
                className
            )}
            {...props}
        />
    );
}
