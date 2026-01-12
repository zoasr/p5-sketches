import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import p5 from "p5";
import { getResponsiveCanvasSize } from "../lib/canvasUtils";

export type GoldenRatioProps = SketchProps & {
    ratio: number;
    radius: number;
};

export function sketch(p: P5CanvasInstance<GoldenRatioProps>) {
    let ratio = 1.618;
    let radius = 0;

    const points: { x: number; y: number }[] = [];

    p.setup = () => {
        const { width, height } = getResponsiveCanvasSize();
        p.createCanvas(width, height);
        radius = p.height / 2;
        p.background(0);
        p.angleMode(p5.prototype.DEGREES);
        for (let r = 1, i = 0; r <= radius; r += 0.3, i++) {
            const angle = i * (360 * ratio);
            const x = p.width / 2 + Math.cos(angle) * r;
            const y = p.height / 2 + Math.sin(angle) * r;
            points.push({ x, y });
        }
        p.noLoop();
    };

    p.windowResized = () => {
        const { width, height } = getResponsiveCanvasSize();
        p.resizeCanvas(width, height);
        custom_draw(p);
    };
    const custom_draw = (p: P5CanvasInstance<GoldenRatioProps>) => {
        points.splice(0, points.length);
        for (let r = 1, i = 0; r <= radius; r += 0.3, i++) {
            const angle = i * (360 * ratio);
            const x = p.width / 2 + Math.cos(angle) * r;
            const y = p.height / 2 + Math.sin(angle) * r;
            points.push({ x, y });
        }
        p.background(0);
        for (const point of points) {
            p.stroke(255, 255);
            const d = p5.prototype.map(
                p5.prototype.dist(p.width / 2, p.height / 2, point.x, point.y),
                0,
                p.width / 2,
                1,
                6
            );
            p.push();
            p.colorMode(p5.prototype.HSB);
            p.stroke(51, 51, 110);
            p.strokeWeight(d);
            p.ellipse(point.x, point.y, d, d);
            p.pop();
        }
    };

    p.updateWithProps = (props: GoldenRatioProps) => {
        ratio = props.ratio;
        radius = props.radius;
        custom_draw(p);
    };
}
