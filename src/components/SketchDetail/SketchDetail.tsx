import { ReactNode } from "react";
import { Sketch } from "../../sketches_data";
import { Badge } from "../ui/Badge";
import { buttonClasses } from "../ui/Button";
import { FiExternalLink } from "react-icons/fi";

function formatDate(dateIso: string) {
	const d = new Date(dateIso);
	if (Number.isNaN(d.getTime())) return dateIso;
	return d.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
}

export default function SketchDetail({
	sketch,
	children,
}: {
	sketch: Sketch;
	children: ReactNode;
}) {
	return (
		<div className="mx-auto w-full max-w-6xl">
			<section className="flex flex-col gap-8">
				<header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<div className="flex flex-wrap items-center gap-2">
							<Badge tone="neutral">{sketch.category}</Badge>
							<Badge tone={sketch.difficulty === "Beginner" ? "cyan" : sketch.difficulty === "Intermediate" ? "purple" : "pink"}>
								{sketch.difficulty}
							</Badge>
							<Badge className="text-white/60">{formatDate(sketch.createdAt)}</Badge>
						</div>
						<h1 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
							{sketch.title}
						</h1>
						<p className="mt-2 flex flex-wrap gap-2">
							{sketch.tags.map((tag) => (
								<Badge key={tag} className="text-white/70">
									{tag}
								</Badge>
							))}
						</p>
					</div>

					<div className="flex items-center gap-3">
						<a
							href={sketch.sourceCode}
							target="_blank"
							rel="noreferrer"
							className={buttonClasses({ variant: "primary", size: "sm" })}
						>
							Source code
							<FiExternalLink />
						</a>
					</div>
				</header>

				<div>{children}</div>

				<section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-md">
					<h2 className="text-sm font-semibold tracking-wide text-white/75">
						About
					</h2>
					<div
						className="rich-text mt-3 text-sm leading-relaxed text-white/70"
						dangerouslySetInnerHTML={{ __html: sketch.description }}
					/>
				</section>
			</section>
		</div>
	);
}
