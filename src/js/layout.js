import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./views/scrollToTop";

import { Home } from "./component/home";
import Details from "./component/Details.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./views/navbar.js";
import { Footer } from "./views/footer";
import Random from "./component/Random.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />}/>
						<Route path=":nature/:id" element={<Details/>}/>
						<Route path="/random" element={<Random/>}/>
						<Route path="*" element={<h1>Not Found</h1>}/>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
