import { Link, useLocation, useNavigate } from "react-router-dom";
import githubIcon from "../../images/github-mark-white.svg";
import { FiArrowLeft } from "react-icons/fi";
import { buttonClasses } from "./ui/Button";
import { cn } from "../lib/cn";

const Header = ({ title }: { title: string | null }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === "/";

    return (
        <header className="header sticky top-0 z-20 w-full p-4">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                    {!isHome && (
                        <button
                            onClick={() => navigate(-1)}
                            className={cn(buttonClasses({ variant: "ghost", size: "sm" }), "px-2")}
                            aria-label="Go back"
                        >
                            <FiArrowLeft className="text-base" />
                        </button>
                    )}

                    <div className="min-w-0">
                        <Link
                            to="/"
                            className="block truncate text-base font-semibold tracking-tight text-white/90"
                        >
                            <span className="bg-gradient-to-r from-accent-red via-accent-redDark to-accent-red bg-clip-text text-transparent">
                                p5 sketches
                            </span>
                        </Link>
                        {title && (
                            <p className="mt-0.5 truncate text-xs text-white/50">
                                <Link className="hover:text-white" to="/">
                                    Sketches
                                </Link>
                                <span className="mx-1 text-white/30">/</span>
                                <span>{title}</span>
                            </p>
                        )}
                    </div>
                </div>

                <nav className="flex shrink-0 items-center gap-4">
                    <Link
                        className={cn(
                            "text-sm font-medium transition-colors",
                            isHome ? "text-white" : "text-white/60 hover:text-white"
                        )}
                        to="/"
                    >
                        Sketches
                    </Link>
                    <a
                        className="rounded-lg p-1 opacity-70 transition-opacity hover:opacity-100"
                        href="https://github.com/ZOASR/p5-sketches/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <img src={githubIcon} width={22} alt="" />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
