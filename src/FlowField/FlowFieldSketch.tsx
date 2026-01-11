import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { CanvasFrame } from "../components/ui/CanvasFrame";

const FlowFieldSketch = () => {
	return (
		<div className="flex flex-col gap-8">
			<CanvasFrame className="mx-auto my-4">
				<ReactP5Wrapper sketch={sketch} />
			</CanvasFrame>
		</div>
	);
};

export default FlowFieldSketch;
