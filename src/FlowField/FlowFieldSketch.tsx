import { ReactP5Wrapper } from "@p5-wrapper/react";
import { sketch } from "./sketch";
import { InteractiveCanvasFrame } from "../components/ui/InteractiveCanvasFrame";

const FlowFieldSketch = () => {
    return (
        <div className="flex flex-col gap-8">
            <InteractiveCanvasFrame className="mx-auto my-4">
                <ReactP5Wrapper sketch={sketch} />
            </InteractiveCanvasFrame>
        </div>
    );
};

export default FlowFieldSketch;
