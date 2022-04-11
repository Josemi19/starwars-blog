import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
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
								<span className="badge bg-secondary ms-1 parche">{store.favorites.length}</span>
							</button>
									<ul className="dropdown-menu">
										{store.favorites.map((item,index)=> (
												<li key={index}><span className="dropdown-item d-flex justify-content-between align-items-center">{item}<button type="button" className="btn" onClick={()=>{actions.deleteFavs(index)}}><i className="fas fa-trash"></i></button></span></li>
										))}
									</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
