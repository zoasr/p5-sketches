import { ReactNode } from "react";
import { cn } from "../../lib/cn";

export function CanvasFrame({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"relative mx-auto w-fit overflow-hidden rounded-2xl",
				"border border-white/10 bg-ink-950/70",
				"shadow-md",
				className
			)}
		>
			<div className="pointer-events-none absolute inset-0 bg-card-radial opacity-60" />
			<div className="relative">{children}</div>
		</div>
	);
}
