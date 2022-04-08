import React from "react";
import { Link } from "react-router-dom";
import Favorites from "../component/Favorites.jsx";

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img
							src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
							alt="Logo de Star Wars"
							width="80"
							height="50"
						/>
					</Link>
					<div className="btn-group">
				<button
					type="button"
					className="btn btn-danger dropdown-toggle"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu">
							<Favorites/>
						</ul>
			</div>
				</div>
			</nav>
		</>
	);
};
