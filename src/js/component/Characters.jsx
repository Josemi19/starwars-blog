import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState} from "react";
import { Context } from "../store/appContext";
import foto from "../../../docs/assets/IMG-20220719-WA0000.jpg"

const Characters = () => {
	const {store, actions} = useContext(Context)
	return (
		<>
			<h1 className="ms-5 header">Characters</h1>
			<div className="container ms-5 mb-3 scroll">
				<div className="d-inline-flex">
					{store.people[0].map((personaje) => (
						<div key={personaje.id} className="card col-2 m-3 tarjeta">
							<img
								src={foto}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									{personaje.nombre}
								</h5>
								<p> Gender: {personaje.gender} <br />
								    Hair Color: {personaje.hair_color} <br />
									Eye Color: {personaje.eye_color}
								</p>
								
                                <div className="container d-flex justify-content-between">
                                    <Link
                                        to={`people/${personaje.id-1}`}
                                        className="btn btn-primary">
                                        View Details
                                    </Link>
                                    <button
                                        className="btn btn-danger bg-light" onClick={()=>{
											actions.addFavs("personaje",personaje.nombre)
										}}>
                                        <i className="far fa-heart cora"></i>
                                    </button>
                                </div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Characters;