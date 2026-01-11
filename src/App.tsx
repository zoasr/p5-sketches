import "./App.css";
import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import SketchGrid from "./components/SketchGrid/SketchGrid";
import { Sketch, sketches } from "./sketches_data";
import SketchDetail from "./components/SketchDetail/SketchDetail";

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<SketchGrid />} />
			{sketches.map((sketch: Sketch) => {
				const SketchElement = sketch.sketchComponent;
				if (!SketchElement) return null;

				return (
					<Route
						path={sketch.title.toLowerCase()}
						key={sketch.title.toLowerCase()}
						element={
							<SketchDetail sketch={sketch}>
								<SketchElement />
							</SketchDetail>
						}
					/>
				);
			})}
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
