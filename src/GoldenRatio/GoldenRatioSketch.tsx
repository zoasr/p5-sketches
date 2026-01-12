import { ReactP5Wrapper } from "@p5-wrapper/react";
import Slider from "rc-slider";
import { useState } from "react";
import { sketch } from "./sketch";
import "rc-slider/assets/index.css";
import { InteractiveCanvasFrame } from "../components/ui/InteractiveCanvasFrame";

type GRSliders = {
    radius: number | number[];
    ratio: number | number[];
};

const GoldenRatioSketch = () => {
    const [sliderValues, setSliderValues] = useState<GRSliders>({
        radius: 300,
        ratio: 1.618,
    });

    const trackStyle = [
        { backgroundColor: "#22d3ee" },
        { backgroundColor: "rgba(255,255,255,0.12)" },
    ];
    const handleStyle = [
        { backgroundColor: "#0f172a" },
        { backgroundColor: "#a855f7" },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium text-white/80">
                            Ratio:{" "}
                            {sliderValues.ratio == 1.6180339887
                                ? "φ"
                                : sliderValues.ratio == 3.1415926536
                                ? "π"
                                : sliderValues.ratio == 2.7182818285
                                ? "e"
                                : sliderValues.ratio}
                        </p>
                        <Slider
                            min={0.5}
                            max={4}
                            defaultValue={1.618}
                            step={0.0001}
                            onChange={(value: number | number[]) =>
                                setSliderValues((prev) => ({ ...prev, ratio: value }))
                            }
                            marks={{
                                1.6180339887: "φ",
                                3.1415926536: "π",
                                2.7182818285: "e",
                            }}
                            trackStyle={trackStyle}
                            handleStyle={handleStyle}
                            railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium text-white/80">
                            Radius: {sliderValues.radius}
                        </p>
                        <Slider
                            min={0}
                            max={innerWidth * 0.25}
                            defaultValue={300}
                            step={1}
                            onChange={(value: number | number[]) =>
                                setSliderValues((prev) => ({ ...prev, radius: value }))
                            }
                            trackStyle={trackStyle}
                            handleStyle={handleStyle}
                            railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        />
                    </div>
                </div>
            </div>

            <InteractiveCanvasFrame className="mx-auto">
                <ReactP5Wrapper
                    sketch={sketch}
                    ratio={sliderValues.ratio}
                    radius={sliderValues.radius}
                />
            </InteractiveCanvasFrame>
        </div>
    );
};

export default GoldenRatioSketch;
