import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Suspense, useEffect } from "react";
import { useCurrentSketch } from "../lib/sketchRouting";

const Layout = () => {
    const location = useLocation();
    const currentSketch = useCurrentSketch();

    useEffect(() => {
        if (currentSketch) {
            document.title = `p5-sketches — ${currentSketch.title}`;
            return;
        }
        document.title = "p5-sketches";
    }, [currentSketch]);

    return (
        <>
            <Header title={currentSketch?.title ?? null} />
            <main className="relative mx-3 my-4 flex flex-col justify-start overflow-y-auto rounded-3xl border border-white/10 bg-white/5 shadow-md sm:mx-6">
                <div className="pointer-events-none absolute inset-0 bg-app-radial opacity-70" />
                <div className="relative p-4 sm:p-6 md:p-10">
                    <Suspense
                        fallback={
                            <div className="mx-auto flex min-h-[55dvh] w-full max-w-xl flex-col items-center justify-center gap-4 text-center">
                                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-accent-red via-accent-redDark to-accent-redLight opacity-70 shadow-glow" />
                                <p className="text-sm font-medium tracking-wide text-white/70">
                                    Loading sketch…
                                </p>
                            </div>
                        }
                    >
                        <div key={location.pathname} className="animate-fade-up">
                            <Outlet />
                        </div>
                    </Suspense>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
