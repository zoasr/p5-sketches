import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import { Radio } from "@mui/material";
import { CanvasFrame } from "../components/ui/CanvasFrame";

interface BVector {
    trace: boolean;
    follow: boolean;
}
interface BSliders {
    xfreq: number | number[];
    yfreq: number | number[];
    speed: number | number[];
}

const BlobSketch = () => {
    const [sliderValues, setSliderValues] = useState<BSliders>({
        xfreq: 1,
        yfreq: 1,
        speed: 0.005,
    });
    const [vector, setVector] = useState<BVector>({
        trace: true,
        follow: false,
    });

    const handleRadio = () => {
        setVector({ trace: !vector.trace, follow: !vector.follow });
    };

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
            <div
                className={`${vector.trace ? "flex" : "hidden"} rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md`}
            >
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium text-white/80">
                            Horizontal Frequency: {sliderValues.xfreq}
                        </p>
                        <Slider
                            min={1}
                            max={10}
                            defaultValue={1}
                            step={1}
                            onChange={(value: number | number[]) =>
                                setSliderValues((prev) => ({ ...prev, xfreq: value }))
                            }
                            trackStyle={trackStyle}
                            handleStyle={handleStyle}
                            railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium text-white/80">
                            Vertical Frequency: {sliderValues.yfreq}
                        </p>
                        <Slider
                            min={1}
                            max={10}
                            defaultValue={1}
                            step={1}
                            onChange={(value: number | number[]) =>
                                setSliderValues((prev) => ({ ...prev, yfreq: value }))
                            }
                            trackStyle={trackStyle}
                            handleStyle={handleStyle}
                            railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-medium text-white/80">
                            Speed: {sliderValues.speed}
                        </p>
                        <Slider
                            min={0}
                            max={0.03}
                            defaultValue={0.001}
                            step={0.0001}
                            onChange={(value: number | number[]) =>
                                setSliderValues((prev) => ({ ...prev, speed: value }))
                            }
                            trackStyle={trackStyle}
                            handleStyle={handleStyle}
                            railStyle={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-sm text-white/75">Oscillate</p>
                    <Radio
                        checked={vector.trace}
                        onChange={handleRadio}
                        name="controls"
                        sx={{
                            color: "rgba(34,211,238,0.7)",
                            "&.Mui-checked": { color: "#22d3ee" },
                        }}
                    />
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-sm text-white/75">Follow mouse</p>
                    <Radio
                        checked={vector.follow}
                        onChange={handleRadio}
                        name="controls"
                        sx={{
                            color: "rgba(168,85,247,0.7)",
                            "&.Mui-checked": { color: "#a855f7" },
                        }}
                    />
                </div>
            </div>

            <CanvasFrame className="mx-auto">
                <ReactP5Wrapper
                    xf={sliderValues.yfreq}
                    yf={sliderValues.xfreq}
                    speed={sliderValues.speed}
                    trace={vector.trace}
                    follow={vector.follow}
                    sketch={sketch}
                />
            </CanvasFrame>
        </div>
    );
};

export default BlobSketch;
