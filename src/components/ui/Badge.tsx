import * as React from "react";
import { cn } from "../../lib/cn";

type BadgeTone = "neutral" | "cyan" | "purple" | "pink" | "lime";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
    neutral:
        "bg-white/5 text-white/80 border-white/10",
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
    pink: "bg-accent-pink/10 text-accent-pink border-accent-pink/20",
    lime: "bg-accent-lime/10 text-accent-lime border-accent-lime/20",
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
                toneClasses[tone],
                className
            )}
            {...props}
        />
    );
}
