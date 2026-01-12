import Fractal from "./fractal";
import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import { getResponsiveCanvasSize } from "../lib/canvasUtils";

export type FractalSketchProps = SketchProps & {
    rotation: number;
    iterations: number;
};

export function sketch(p: P5CanvasInstance<FractalSketchProps>) {
    let fractal1: Fractal;
    let fractal2: Fractal;
    let angle: number = 30;
    let numberOfIterations: number = 0;

    p.updateWithProps = (props: FractalSketchProps) => {
        angle = props?.rotation;
        numberOfIterations = props?.iterations;
        custom_draw(2);
    };

    p.setup = () => {
        const { width, height } = getResponsiveCanvasSize();
        p.createCanvas(width, height);
        fractal1 = new Fractal(
            p.width / 2 - p.width / 4,
            p.height / 2,
            p.width / 2,
            angle,
            p
        );
        fractal2 = new Fractal(
            p.width / 2 - p.width / 4,
            p.height / 2,
            p.width / 2,
            360 - angle,
            p
        );
        p.noLoop();
        custom_draw(1);
    };
    p.windowResized = () => {
        const { width, height } = getResponsiveCanvasSize();
        fractal1 = new Fractal(
            p.width / 2 - p.width / 4,
            p.height / 2,
            p.width / 2,
            angle,
            p
        );
        fractal2 = new Fractal(
            p.width / 2 - p.width / 4,
            p.height / 2,
            p.width / 2,
            360 - angle,
            p
        );
        p.resizeCanvas(width, height);
        custom_draw(1);
    };

    const custom_draw = (times: number) => {
        for (let i = 0; i < times; i++) {
            p.background(0, 51, 12);
            p.push();
            p.strokeWeight(0);
            p.fill(100, 200, 34);
            p.pop();
            for (let i = 0; i < numberOfIterations; i++) {
                fractal1.nextLevel();
                fractal2.nextLevel();
                fractal1.updateAngle(angle);
                fractal2.updateAngle(360 - angle);
            }
            fractal1.show();
            fractal2.show();
            fractal1.restart();
            fractal2.restart();
        }
    };
}
