import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Suspense, useEffect } from "react";

// const FaCode = lazy(() => import("react-icons/fa"));

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state)
            document.title = `p5-sketches - ${location.state.title.toLowerCase()}`;
        else document.title = "p5-sketches";
    }, [location]);

    return (
        <>
            <Header
                title={location.state?.title ? location.state?.title : null}
            />
            <main className="overflow-y-auto flex flex-col justify-start mx-4 my-4 rounded-2xl bg-slate-900/20 border border-white/5">
                <div className="p-4 sm:p-6 md:p-8">
                    <Suspense
                        fallback={
                            <div className="flex justify-center align-middle w-full min-h-[60vh] text-4xl sm:text-8xl mx-auto text-center filter drop-shadow-2xl">
                                <h1 className="text-center my-auto">Loading...</h1>
                            </div>
                        }
                    >
                        <Outlet />
                    </Suspense>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
