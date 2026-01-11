import * as React from "react";
import { cn } from "../../lib/cn";

type BadgeTone = "neutral" | "red" | "darkRed" | "white";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
    neutral:
        "bg-black/60 backdrop-blur-md text-white/90 border-white/10",
    red: "bg-accent-red950/60 backdrop-blur-md text-accent-redLight border-accent-red/30",
    darkRed: "bg-accent-red950/80 backdrop-blur-md text-accent-red border-accent-redDark/50",
    white: "bg-white/10 backdrop-blur-md text-white border-white/20",
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wider",
                toneClasses[tone],
                className
            )}
            {...props}
        />
    );
}
