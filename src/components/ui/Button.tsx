import * as React from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

export function buttonClasses(
    options: { variant?: ButtonVariant; size?: ButtonSize } = {}
) {
    const { variant = "primary", size = "md" } = options;

    return cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
        "transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-10 px-4 text-sm",
        variant === "primary" &&
            cn(
                "text-ink-950",
                "bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink",
                "hover:brightness-110",
                "shadow-glow"
            ),
        variant === "secondary" &&
            cn(
                "text-white",
                "bg-white/5 hover:bg-white/10",
                "border border-white/10"
            ),
        variant === "ghost" &&
            cn(
                "text-white/80 hover:text-white",
                "bg-transparent hover:bg-white/5"
            )
    );
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

export function Button({
    className,
    variant,
    size,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonClasses({ variant, size }), className)}
            {...props}
        />
    );
}
