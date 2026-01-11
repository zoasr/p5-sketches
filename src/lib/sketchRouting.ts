import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Sketch, sketches } from "../sketches_data";

export function getSketchFromPathname(pathname: string): Sketch | undefined {
	const slug = decodeURIComponent(pathname).replace(/^\/+/, "").toLowerCase();
	if (!slug) return undefined;
	return sketches.find((s) => s.title.toLowerCase() === slug);
}

export function useCurrentSketch(): Sketch | undefined {
	const location = useLocation();
	return useMemo(
		() => getSketchFromPathname(location.pathname),
		[location.pathname]
	);
}
