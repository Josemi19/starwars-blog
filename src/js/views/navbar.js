import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState} from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [nombre, setNombre] = useState("")
	const [apellido, setApellido] = useState("")
	let navegar = useNavigate();

	const handleUser = (event) => {
		if (event.target.id == "correo" || event.target.id == "correo 2") {
			setEmail(event.target.value)
		}
		else if (event.target.id == "contra" || event.target.id == "contra 2") {
			setPassword(event.target.value)
		}
		else if (event.target.id == "nombre") {
			setNombre(event.target.value)
		}
		else if (event.target.id == "apellido") {
			setApellido(event.target.value)
		}
	}

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
					{store.token.trim() == "" ?             // Primer IF
						<div className="btn-group">
							<button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
								Sign Up
							</button>
							<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div className="modal-dialog modal-dialog-centered">
									<div className="modal-content p-3">
										<form>
											<div className="mb-3">
												<label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
												<input
													type="email"
													className="form-control"
													id="correo"
													aria-describedby="emailHelp"
													value={email}
													onChange={handleUser}
												/>
											</div>
											<div className="mb-3">
												<label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
												<input
													type="password"
													className="form-control"
													id="contra"
													value={password}
													onChange={handleUser}
												/>
											</div>
											<div className="mb-3">
												<label htmlFor="exampleInputEmail1" className="form-label">Nombre:</label>
												<input
													type="text"
													className="form-control"
													id="nombre"
													aria-describedby="emailHelp"
													value={nombre}
													onChange={handleUser}
												/>
											</div>
											<div className="mb-3">
												<label htmlFor="exampleInputEmail1" className="form-label">Apellido:</label>
												<input
													type="text"
													className="form-control"
													id="apellido"
													aria-describedby="emailHelp"
													value={apellido}
													onChange={handleUser}
												/>
											</div>
											<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
												actions.signUp(email, password, nombre, apellido)
												navegar("/")
											}}>Sign Up</button>
										</form>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										</div>
									</div>
								</div>
							</div>
							<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Log In
							</button>
							<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="false">
								<div className="modal-dialog">
								<div className="modal-content p-3">
										<form>
											<div className="mb-3">
												<label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
												<input
													type="email"
													className="form-control"
													id="correo 2"
													aria-describedby="emailHelp"
													value={email}
													onChange={handleUser}
												/>
											</div>
											<div className="mb-3">
												<label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
												<input
													type="password"
													className="form-control"
													id="contra 2"
													value={password}
													onChange={handleUser}
												/>
											</div>
										</form>
										
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
												actions.logIn(email, password)
												navegar("/")
											}}>Log In</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						:                               // ELSE
						<div className="btn-group">
							<div className="btn-group">
								<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
									Favorites
									<span className="badge bg-secondary ms-1 parche">{store.favorites.length}</span>
								</button>
								<ul className="dropdown-menu">
									{store.favorites.map((item, index) => (
										<li key={index}><span className="dropdown-item d-flex justify-content-between align-items-center">{item.name}<button type="button" className="btn" onClick={() => { actions.deleteFavs(item.name) }}><i className="fas fa-trash"></i></button></span></li>
									))}
								</ul>
								<button type="button" className="btn btn-primary ms-2" onClick={()=>{
									actions.logOut()
									navegar("/")
								}
								}>Log out</button>
							</div>
						</div>
					}
					{/* <div className="btn-group">
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
					</div> */}
				</div>
			</nav>
		</>
	);
};
