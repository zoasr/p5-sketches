import { P5CanvasInstance } from "@p5-wrapper/react";
import p5 from "p5";
import { Line } from "./Line";
import { getResponsiveCanvasSize } from "../lib/canvasUtils";

export function sketch(p: P5CanvasInstance) {
    const lines: Line[] = [];
    p.setup = () => {
        const { width, height } = getResponsiveCanvasSize();
        p.createCanvas(width, height);
        for (let i = 0; i < 30; i++) {
            lines.push(
                new Line(
                    p5.prototype.random(p.width),
                    p5.prototype.random(p.height),
                    p
                )
            );
        }
    };

    p.windowResized = () => {
        const { width, height } = getResponsiveCanvasSize();
        p.resizeCanvas(width, height);
    };

    p.draw = () => {
        p.background(0, 51, 0, 50);
        for (const l of lines) {
            l.move();
            l.show();
        }
    };
}
