export function getResponsiveCanvasSize(): { width: number; height: number } {
	const isMobile = window.innerWidth <= 768;
	
	if (isMobile) {
		// Full width on mobile, accounting for padding
		const width = Math.min(window.innerWidth * 0.9, 600);
		const height = Math.min(window.innerHeight * 0.6, 600);
		return { width, height };
	} else {
		// Contained size on larger screens
		const size = Math.min(window.innerWidth * 0.5, window.innerHeight * 0.6, 800);
		return { width: size, height: size };
	}
}
