import { useMemo, useState } from "react";
import SketchCard from "../SketchCard/SketchCard";
import { sketches, Sketch } from "../../sketches_data";
import { Input } from "../ui/Input";

function normalize(text: string) {
    return text.toLowerCase().trim();
}

function stripHtml(html: string) {
    return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

const SketchGrid = () => {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState<string>("all");
    const [difficulty, setDifficulty] = useState<string>("all");

    const categories = useMemo(() => {
        return Array.from(new Set(sketches.map((s) => s.category))).sort();
    }, []);

    const difficulties = useMemo(() => {
        return Array.from(new Set(sketches.map((s) => s.difficulty))).sort();
    }, []);

    const filtered = useMemo(() => {
        const q = normalize(query);
        return sketches.filter((s) => {
            if (category !== "all" && s.category !== category) return false;
            if (difficulty !== "all" && s.difficulty !== difficulty) return false;

            if (!q) return true;
            const haystack = normalize(
                [s.title, s.category, s.difficulty, ...s.tags, stripHtml(s.description)].join(
                    " "
                )
            );
            return haystack.includes(q);
        });
    }, [query, category, difficulty]);

    return (
        <div className="mx-auto w-full max-w-6xl animate-fade-up">
            <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        Explore sketches
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60">
                        A curated set of interactive p5.js experiments—play, tweak parameters, and
                        dive into the code.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 md:w-[520px]">
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search sketches, tags, concepts…"
                        className="sm:col-span-3"
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white/80 shadow-md outline-none focus:border-accent-red/35 focus:ring-2 focus:ring-accent-red/25"
                    >
                        <option value="all">All categories</option>
                        {categories.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>

                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white/80 shadow-md outline-none focus:border-accent-red/35 focus:ring-2 focus:ring-accent-red/25"
                    >
                        <option value="all">All difficulty</option>
                        {difficulties.map((d) => (
                            <option key={d} value={d}>
                                {d}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {filtered.length === 0 ? (
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-white/60">
                    No sketches found. Try another query.
                </div>
            ) : (
                <div className="mt-8 columns-1 gap-6 sm:columns-2 xl:columns-3">
                    {filtered.map((sketch: Sketch) => (
                        <SketchCard key={sketch.title} {...sketch} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SketchGrid;
