import { LazyExoticComponent, lazy } from "react";

const CircuitSketch = lazy(() => import("./Cirtcuit/CircuitSketch"));
const FlockSketch = lazy(() => import("./Flock/FlockSketch"));
const FractalSketch = lazy(() => import("./Fractal/FractalSketch"));
const GoldenRatioSketch = lazy(() => import("./GoldenRatio/GoldenRatioSketch"));
const BlobSketch = lazy(() => import("./Blob/BlobSketch"));
const FlowFieldSketch = lazy(() => import("./FlowField/FlowFieldSketch"));
const SandPilesSketch = lazy(() => import("./SandPiles/SandPilesSketch"));

import flockImage from "../images/flock_thumb.png";
import fractalImage from "../images/fractal_thumb.png";
import circuitImage from "../images/circuit_thumb.png";
import goldenImage from "../images/golden_thumb.png";
import bLobImage from "../images/blob_thumb.gif";
import FlowImage from "../images/flow_thumb.png";
import SandPilesImage from "../images/sandpiles_thumb.png";

export type SketchDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type SketchCategory =
	| "Simulation"
	| "Generative"
	| "Math"
	| "Systems"
	| "Visualization"
	| "Nature";

export interface Sketch {
	imageUrl: string;
	title: string;
	description: string;
	sourceCode: string;
	colors: string[];
	difficulty: SketchDifficulty;
	category: SketchCategory;
	createdAt: string;
	tags: string[];
	sketchComponent?: LazyExoticComponent<() => JSX.Element>;
}

export const sketches: Sketch[] = [
	{
		title: "Flock",
		description:
			'A simple simulation system for flocking agents (Boids)  refer to this <a style="font-weight: 800; text-decoration: underline;" href="https://www.red3d.com/cwr/boids/" target="_blank">paper</a> (by Craig Reynolds) for more details',
		imageUrl: flockImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Fractal/sketch.ts",
		colors: ["rgba(150, 51, 12, 0.5)", "rgba(10, 10, 10, 0.2)"],
		difficulty: "Intermediate",
		category: "Simulation",
		createdAt: "2023-10-01",
		tags: ["boids", "agents", "emergence"],
		sketchComponent: FlockSketch,
	},
	{
		title: "Fractal",
		description:
			'A simple generator for the <a style="font-weight: 800; text-decoration: underline;" href="https://en.wikipedia.org/wiki/Koch_snowflake" target="_blank">Koch snowflake curve</a> and other fractals',
		imageUrl: fractalImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Flock/sketch.ts",
		colors: ["rgba(58, 137, 25, 0.2)", "rgba(0, 89, 20, 0.5)"],
		difficulty: "Beginner",
		category: "Generative",
		createdAt: "2023-09-12",
		tags: ["koch", "recursion", "geometry"],
		sketchComponent: FractalSketch,
	},
	{
		title: "Golden Ratio",
		description:
			' simulating the formation of a flower using the golden ratio and other custom numbers, check this <a style="font-weight: 800; text-decoration: underline;" href="https://www.youtube.com/watch?v=sj8Sg8qnjOg" target="_blank">numberphile video</a> for more amazing detail!',
		imageUrl: goldenImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/GoldenRatio/sketch.ts",
		colors: ["rgba(204, 187, 100, 0.2)", "rgba(126, 117, 62, 0.5)"],
		difficulty: "Beginner",
		category: "Math",
		createdAt: "2023-08-06",
		tags: ["phyllotaxis", "math", "phi"],
		sketchComponent: GoldenRatioSketch,
	},
	{
		title: "Circuit",
		description: "Animated PCB-like traces",
		imageUrl: circuitImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Circuit/sketch.ts",
		colors: ["rgba(0, 150, 0, 0.2)", "rgba(0, 53, 0, 0.5)"],
		difficulty: "Intermediate",
		category: "Systems",
		createdAt: "2023-10-22",
		tags: ["noise", "paths", "pcb"],
		sketchComponent: CircuitSketch,
	},
	{
		title: "Dancing Blob",
		description: "A soothing dancing blob 🐡",
		imageUrl: bLobImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/Blob/sketch.ts",
		colors: ["rgba(0, 0, 150, 0.5)", "rgba(50, 0, 0, 0.5)"],
		difficulty: "Beginner",
		category: "Nature",
		createdAt: "2023-07-18",
		tags: ["oscillation", "organic", "blob"],
		sketchComponent: BlobSketch,
	},
	{
		title: "Flow Field",
		description:
			'A colorful implementation of a flow field. If you want more detail on flow fields please check out this <a style="font-weight: 800; text-decoration: underline;" href="https://www.youtube.com/watch?v=MJNy2mdCt20" target="_blank">video</a>',
		imageUrl: FlowImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/FlowField/sketch.ts",
		colors: ["rgba(193, 98, 91, 0.2)", "rgba(58, 82, 169, 0.5)"],
		difficulty: "Intermediate",
		category: "Visualization",
		createdAt: "2023-11-03",
		tags: ["vectors", "particles", "noise"],
		sketchComponent: FlowFieldSketch,
	},
	{
		title: "Sand Piles",
		description:
			'Sandpiles are a <a style="font-weight: 800; text-decoration: underline;" href="https://en.wikipedia.org/wiki/Cellular_automaton"> cellular automaton</a> simulation depicting the toppling of sand particles into a grid of cells and coloring each cell depending on the amount of sand particles it has',
		imageUrl: SandPilesImage,
		sourceCode:
			"https://github.com/ZOASR/p5-sketches/blob/main/src/SandPiles/sketch.ts",
		colors: ["rgba(250, 100, 30, 0.2)", "rgba(180, 80, 20, 0.5)"],
		difficulty: "Advanced",
		category: "Systems",
		createdAt: "2023-12-08",
		tags: ["cellular-automaton", "complexity", "sand"],
		sketchComponent: SandPilesSketch,
	},
];
