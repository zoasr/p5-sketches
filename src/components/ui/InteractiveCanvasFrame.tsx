import { ReactNode, useRef, useState, useEffect } from "react";
import { cn } from "../../lib/cn";
import { FiMaximize2, FiMinimize2, FiCamera } from "react-icons/fi";

export function InteractiveCanvasFrame({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, []);

	const toggleFullscreen = async () => {
		if (!containerRef.current) return;

		try {
			if (!document.fullscreenElement) {
				await containerRef.current.requestFullscreen();
			} else {
				await document.exitFullscreen();
			}
		} catch (error) {
			console.error("Error toggling fullscreen:", error);
		}
	};

	const takeScreenshot = () => {
		if (!containerRef.current) return;

		const canvas = containerRef.current.querySelector("canvas");
		if (!canvas) {
			console.error("No canvas found");
			return;
		}

		try {
			canvas.toBlob((blob) => {
				if (!blob) return;

				const url = URL.createObjectURL(blob);
				const link = document.createElement("a");
				const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
				link.download = `sketch-${timestamp}.png`;
				link.href = url;
				link.click();
				URL.revokeObjectURL(url);
			});
		} catch (error) {
			console.error("Error taking screenshot:", error);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative w-full overflow-hidden rounded-2xl sm:w-fit",
				"border border-white/10 bg-ink-950/70",
				"shadow-md",
				isFullscreen && "!w-full !h-full flex items-center justify-center",
				className
			)}
		>
			<div className="pointer-events-none absolute inset-0 bg-card-radial opacity-60" />
			
			{/* Action buttons */}
			<div className="absolute right-3 top-3 z-10 flex gap-2">
				<button
					onClick={takeScreenshot}
					className="rounded-lg border border-white/10 bg-ink-950/90 p-2 text-white/70 transition-all hover:bg-ink-900/90 hover:text-white active:scale-95"
					title="Take screenshot"
					aria-label="Take screenshot"
				>
					<FiCamera className="h-5 w-5" />
				</button>
				<button
					onClick={toggleFullscreen}
					className="rounded-lg border border-white/10 bg-ink-950/90 p-2 text-white/70 transition-all hover:bg-ink-900/90 hover:text-white active:scale-95"
					title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
					aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
				>
					{isFullscreen ? (
						<FiMinimize2 className="h-5 w-5" />
					) : (
						<FiMaximize2 className="h-5 w-5" />
					)}
				</button>
			</div>

			<div className="relative">{children}</div>
		</div>
	);
}
