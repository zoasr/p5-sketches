import { Link } from "react-router-dom";
import sourceCodeImage from "../../../images/source_code.svg";
import { Sketch } from "../../sketches_data";
import { Badge } from "../ui/Badge";
import { buttonClasses } from "../ui/Button";
import { cn } from "../../lib/cn";

function stripHtml(html: string) {
	return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatDate(dateIso: string) {
	const d = new Date(dateIso);
	if (Number.isNaN(d.getTime())) return dateIso;
	return d.toLocaleDateString(undefined, {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
}

const toneByDifficulty: Record<Sketch["difficulty"], Parameters<typeof Badge>[0]["tone"]> = {
	Beginner: "cyan",
	Intermediate: "purple",
	Advanced: "pink",
};

const SketchCard = (sketch: Sketch) => {
	const previewText = stripHtml(sketch.description);

	return (
		<article className="group relative mb-6 break-inside-avoid animate-fade-up">
			<div
				className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
				style={{
					background: `linear-gradient(135deg, ${sketch.colors[0]}, ${sketch.colors[1]})`,
				}}
			/>
			<div
				className={cn(
					"relative overflow-hidden rounded-2xl",
					"border border-white/10 bg-surface backdrop-blur-xl",
					"shadow-md transition-transform duration-300",
					"group-hover:-translate-y-1 group-hover:shadow-glow"
				)}
			>
				<div className="relative aspect-[16/10] overflow-hidden">
					<img
						src={sketch.imageUrl}
						alt={sketch.title}
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					/>
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/20 to-transparent" />
					<div className="absolute left-3 top-3 flex flex-wrap gap-2">
						<Badge tone={toneByDifficulty[sketch.difficulty]}>
							{sketch.difficulty}
						</Badge>
						<Badge>{sketch.category}</Badge>
					</div>
				</div>

				<div className="flex flex-col gap-3 p-5">
					<header className="flex items-start justify-between gap-3">
						<div className="min-w-0">
							<h3 className="truncate text-lg font-semibold tracking-tight text-white">
								{sketch.title}
							</h3>
							<p className="mt-1 text-xs text-white/50">
								{formatDate(sketch.createdAt)}
							</p>
						</div>
					</header>

					<p className="line-clamp-3 text-sm leading-relaxed text-white/70">
						{previewText}
					</p>

					<div className="flex flex-wrap gap-2">
						{sketch.tags.slice(0, 4).map((tag) => (
							<Badge key={tag} className="text-white/70">
								{tag}
							</Badge>
						))}
					</div>

					<div className="mt-2 flex items-center justify-between gap-3">
						<Link
							to={sketch.title.toLowerCase()}
							className={buttonClasses({ variant: "secondary", size: "sm" })}
						>
							View sketch
						</Link>
						<a
							href={sketch.sourceCode}
							target="_blank"
							rel="noreferrer"
							className={cn(
								buttonClasses({ variant: "ghost", size: "sm" }),
								"px-2"
							)}
							aria-label="Source code"
						>
							<img width={18} src={sourceCodeImage} alt="" />
						</a>
					</div>
				</div>
			</div>
		</article>
	);
};

export default SketchCard;
