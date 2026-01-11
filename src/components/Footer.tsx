import tailwindLogo from "../../images/tailwindcss.svg";
import viteLogo from "../../images/Vitejs-logo.svg";
import nodeLogo from "../../images/Node.js_logo.svg";
import reactLogo from "../../images/React-icon.svg";
import p5Logo from "../../images/P5js_Logo.svg";

const Footer = () => {
    return (
        <footer className="footer sticky bottom-0 mt-auto w-full px-4 py-4">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
                <p className="text-xs font-medium tracking-wide text-white/60">
                    Built with
                </p>
                <div className="stack flex items-center justify-between">
                    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                        <img
                            className="logo vite hover:-translate-y-0.5 transition-all duration-150"
                            src={viteLogo}
                            width="28"
                            alt="Vite"
                        />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                        <img
                            className="logo tailwind hover:-translate-y-0.5 transition-all duration-150"
                            src={tailwindLogo}
                            width="28"
                            alt="Tailwind CSS"
                        />
                    </a>
                    <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
                        <img
                            className="logo node hover:-translate-y-0.5 transition-all duration-150"
                            src={nodeLogo}
                            width="28"
                            alt="Node.js"
                        />
                    </a>
                    <a href="https://react.dev" target="_blank" rel="noreferrer">
                        <img
                            className="logo react hover:-translate-y-0.5 transition-all duration-150"
                            src={reactLogo}
                            width="28"
                            alt="React"
                        />
                    </a>
                    <a href="https://p5js.org" target="_blank" rel="noreferrer">
                        <img
                            className="logo p5 hover:-translate-y-0.5 transition-all duration-150"
                            src={p5Logo}
                            width="28"
                            alt="p5.js"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
