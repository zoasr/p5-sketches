import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { InteractiveCanvasFrame } from "../components/ui/InteractiveCanvasFrame";

interface Shape {
    rotation: number | number[];
    iterations: number | number[];
}

const FractalSketch = () => {
    const [shape, setShape] = useState<Shape>({ rotation: 30, iterations: 3 });

    return (
        <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium text-white/80">
                            Angle: {shape.rotation}
                        </p>
                        <Slider
                            min={0}
                            max={180}
                            defaultValue={30}
                            step={0.1}
                            marks={{
                                30: "30°",
                                60: "60°",
                                90: "90°",
                                180: "180°",
                            }}
                            onChange={(value: number | number[]) =>
                                setShape((prev) => ({ ...prev, rotation: value }))
                            }
                            trackStyle={[
                                { backgroundColor: "#a3e635" },
                                { backgroundColor: "rgba(255,255,255,0.12)" },
                            ]}
                            handleStyle={[
                                { backgroundColor: "#0f172a" },
                                { backgroundColor: "#22d3ee" },
                            ]}
                            railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium text-white/80">
                            Iterations: {shape.iterations}
                        </p>
                        <Slider
                            min={1}
                            max={5}
                            defaultValue={3}
                            step={1}
                            marks={{ 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" }}
                            onChange={(value: number | number[]) =>
                                setShape((prev) => ({ ...prev, iterations: value }))
                            }
                            trackStyle={[
                                { backgroundColor: "#a855f7" },
                                { backgroundColor: "rgba(255,255,255,0.12)" },
                            ]}
                            handleStyle={[
                                { backgroundColor: "#0f172a" },
                                { backgroundColor: "#ec4899" },
                            ]}
                            railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        />
                    </div>
                </div>
            </div>

            <InteractiveCanvasFrame className="mx-auto">
                <ReactP5Wrapper
                    sketch={sketch}
                    rotation={shape.rotation}
                    iterations={shape.iterations}
                />
            </InteractiveCanvasFrame>
        </div>
    );
};

export default FractalSketch;
