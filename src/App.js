import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import { Toaster } from 'react-hot-toast';

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		const suppressResizeObserverError = () => {
			const resizeObserverErr = window.onerror;
			window.addEventListener('error', (event) => {
				if (event.message.includes('ResizeObserver loop limit exceeded')) {
					event.stopImmediatePropagation();
					return false;
				}
			});
			window.onerror = resizeObserverErr;
		};
		
		suppressResizeObserverError();
		
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
				<Toaster />
		</div>
	);
}

export default App;
