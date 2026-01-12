import * as p5 from "p5";
import Line from "./Line";
import { P5CanvasInstance } from "@p5-wrapper/react";
import { FractalSketchProps } from "./sketch";

export default class Fractal {
	start: p5.Vector;
	end: p5.Vector;
	a: number;
	lines: Line[] = [];
	count = 0;
	p: P5CanvasInstance<FractalSketchProps>;
	constructor(
		x: number,
		y: number,
		w: number,
		angle: number,
		p: P5CanvasInstance<FractalSketchProps>
	) {
		this.start = p.createVector(x, y);
		this.end = p.createVector(x + w, y);
		this.a = angle;
		this.lines = [];
		this.count = 0;
		this.p = p;
		this.lines.push(new Line(this.start, this.end, this.a, this.p));
	}

	nextLevel() {
		this.lines = this.iterate(this.lines);
		this.count++;
	}

	restart() {
		this.count = 0;
		this.lines = [];
		this.lines.push(new Line(this.start, this.end, this.a, this.p));
	}

	getCount() {
		return this.count;
	}

	updateAngle(angle: number) {
		this.a = angle;
	}

	show() {
		for (const l of this.lines) {
			l.show();
		}
	}

	iterate(before: Line[]) {
		const now = [];
		for (const l of before) {
			const a = l.start();
			const b = l.left();
			const c = l.middle();
			const d = l.right();
			const e = l.end();

			now.push(new Line(a, b, this.a, this.p));
			now.push(new Line(b, c, this.a, this.p));
			now.push(new Line(c, d, this.a, this.p));
			now.push(new Line(d, e, this.a, this.p));
		}
		return now;
	}
}
