import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context)
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
						<div className="btn-group">
							<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							{/* {store.favorites.map((favs, index) => 
							(
								<ul key={index} className="dropdown-menu">
									<li><a className="dropdown-item" href="#">{favs}</a></li>
								</ul>
							))} */}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
