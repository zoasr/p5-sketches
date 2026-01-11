import { sketch } from "./sketch";
import Slider from "rc-slider";
import { useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import "rc-slider/assets/index.css";
import { CanvasFrame } from "../components/ui/CanvasFrame";

interface Vector {
	a: number | number[];
	c: number | number[];
	s: number | number[];
}

const FlockSketch = () => {
	const [vector, setVector] = useState<Vector>({ a: 5, c: 2, s: 5 });

	const trackStyle = [
		{ backgroundColor: "#ec4899" },
		{ backgroundColor: "rgba(255,255,255,0.12)" },
	];
	const handleStyle = [
		{ backgroundColor: "#0f172a" },
		{ backgroundColor: "#22d3ee" },
	];

	return (
		<div className="flex flex-col gap-8">
			<div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium text-white/80">
							Alignment: {vector.a}
						</p>
						<Slider
							min={0}
							max={10}
							defaultValue={5}
							step={0.1}
							onChange={(value: number | number[]) =>
								setVector((prev) => ({ ...prev, a: value }))
							}
							trackStyle={trackStyle}
							handleStyle={handleStyle}
							railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium text-white/80">
							Cohesion: {vector.c}
						</p>
						<Slider
							min={0}
							max={10}
							defaultValue={8}
							step={0.1}
							onChange={(value: number | number[]) =>
								setVector((prev) => ({ ...prev, c: value }))
							}
							trackStyle={trackStyle}
							handleStyle={handleStyle}
							railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm font-medium text-white/80">
							Separation: {vector.s}
						</p>
						<Slider
							min={0}
							max={10}
							defaultValue={5}
							step={0.1}
							onChange={(value: number | number[]) =>
								setVector((prev) => ({ ...prev, s: value }))
							}
							trackStyle={trackStyle}
							handleStyle={handleStyle}
							railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
						/>
					</div>
				</div>
			</div>

			<CanvasFrame className="mx-auto">
				<ReactP5Wrapper sketch={sketch} a={vector.a} c={vector.c} s={vector.s} />
			</CanvasFrame>
		</div>
	);
};

export default FlockSketch;
