import p5, { Vector } from "p5";
import { P5CanvasInstance } from "@p5-wrapper/react";
import {FractalSketchProps} from "./sketch";

export default class Line {
	a: Vector;
	b: Vector;
	angle: number;
	p: P5CanvasInstance<FractalSketchProps>;
	constructor(
		start: Vector,
		end: Vector,
		angle: number,
		p: P5CanvasInstance<FractalSketchProps>
	) {
		this.a = start.copy();
		this.b = end.copy();
		this.angle = angle;
		this.p = p;
	}

	show() {
		this.p.stroke(100, 200, 34);
		this.p.strokeWeight(2);
		this.p.line(this.a.x, this.a.y, this.b.x, this.b.y);
		this.p.strokeWeight(3);
		this.p.point(this.a.x, this.a.y);
		this.p.point(this.b.x, this.b.y);
	}

	start() {
		return this.a.copy();
	}

	end() {
		return this.b.copy();
	}

	left() {
		const v = p5.Vector.sub(this.b, this.a);
		v.div(3);
		v.add(this.a);
		return v;
	}

	right() {
		const v = p5.Vector.sub(this.a, this.b);
		v.div(3);
		v.add(this.b);
		return v;
	}

	middle() {
		const v = p5.Vector.sub(this.b, this.a);
		const m = v.copy();
		m.div(2);
		v.div(3);
		const p = this.a.copy();
		p.add(v);
		v.rotate(-p5.prototype.radians(this.angle));
		p.add(v);
		return p;
	}
}
