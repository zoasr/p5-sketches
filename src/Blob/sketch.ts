import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import { Bead } from "./Bead";
import p5 from "p5";
import { getResponsiveCanvasSize } from "../lib/canvasUtils";

export type BlobProps = SketchProps & {
    xf: number;
    yf: number;
    speed: number;
    trace: boolean;
    follow: boolean;
};

export function sketch(p: P5CanvasInstance<BlobProps>) {
    let xfreq = 5;
    let yfreq = 3;
    let follow_ = false;
    let trace_ = true;
    const beads: Bead[] = [];
    p.setup = () => {
        const { width, height } = getResponsiveCanvasSize();
        p.createCanvas(width, height);
        for (let i = 0; i < 30; i++) {
            beads.push(
                new Bead(
                    p.width / 2,
                    p.height / 2,
                    i * 2,
                    1 / i,
                    xfreq,
                    yfreq,
                    0.0001,
                    p
                )
            );
        }
    };

    p.updateWithProps = ({ xf, yf, speed, trace, follow }: BlobProps) => {
        xfreq = xf;
        yfreq = yf;
        trace_ = trace;
        follow_ = follow;
        beads.splice(0, beads.length);
        for (let i = 0; i < 30; i++) {
            beads.push(
                new Bead(
                    p.width / 2,
                    p.height / 2,
                    i * 2,
                    1 / i,
                    xfreq,
                    yfreq,
                    speed,
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
        p.background(0, 100);
        p.noFill();
        p.stroke(255, 10);
        p.strokeWeight(4);

        if (trace_ && !follow_) {
            p.push();
            p.translate(p.width / 2, p.height / 2);
            p.beginShape();
            for (let a = 0; a < Math.PI * 2; a += 0.01) {
                const x = (Math.sin(a * xfreq) * p.width) / 4;
                const y = (Math.cos(a * yfreq) * p.width) / 4;
                p.vertex(x, y);
            }
            p.endShape(p5.prototype.CLOSE);
            p.pop();
        }
        p.fill(255);
        p.noStroke();
        for (const b of beads) {
            b.show();
            if (follow_) {
                b.follow();
            } else {
                b.update();
            }
        }
    };
}
