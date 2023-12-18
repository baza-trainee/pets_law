import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartOne from "./components/PartOne";
import PartTwo from "./components/PartTwo";
import RedBlock from "./components/RedBlock";
import Stories from "./components/Stories";
import Important from './components/Important';
import PartThree from './components/PartThree';
import PartnersSection from "./components/PartnersSection";

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Hero />
				<About />
				<PartOne />
				<Stories />
				<PartTwo />
				<RedBlock />
				<Important />
				<PartThree />
				<PartnersSection />
				<Footer />
			</>
		),
		errorElement: (
			<>
				<Header />
				<Error />
			</>
		)
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
