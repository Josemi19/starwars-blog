import React from "react";
import { useNavigate } from "react-router";
import "../../styles/details.css"
import { useContext } from "react";
import {Context} from "../store/appContext"
import { useParams } from "react-router";

const Details = () => {
	let navegar = useNavigate();
	let {store} = useContext(Context)
	let {people, planets} = store
	let params = useParams()
	let {id,nature} = params
	return (
		<>
			{nature == "people" ? //PRIMER IF
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h1 className="card-title">{people[0][id].nombre}</h1>
								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae minima neque nemo quas, sint ipsam omnis error a facilis temporibus cumque aliquid voluptate? Odio neque harum iste quis obcaecati?
								</p>
							</div>
						</div>
					</div>
					<div className="card-footer card-footer">
						<p className="card-text">
							Name
							<p className="pt-3">{people[0][id].nombre}</p>
						</p>
						<p className="card-text">
							Hair-Color
							<p className="pt-3">{people[0][id].hair_color}</p>
						</p>
						<p className="card-text">
							Eyes-Color
							<p className="pt-3">{people[0][id].eye_color}</p>
						</p>
						<p className="card-text">
							Gender
							<p className="pt-3">{people[0][id].gender}</p>
						</p>
					</div>
					<button
						type="button"
						className="btn btn-primary col-2 mt-3"
						onClick={() => {
							navegar(-1);
						}}>
						Go Back
					</button>
				</div>
				: nature == "planets" ? //SEGUNDO IF
				<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h1 className="card-title">{planets[0][id].nombre}</h1>
							<p className="card-text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae consequuntur alias, magnam velit quasi officiis omnis culpa voluptatibus id et, beatae facilis nobis eligendi minima, quam libero dolorum odit explicabo.
							</p>
						</div>
					</div>
				</div>
				<div className="card-footer card-footer">
					<p className="card-text">
						Name
						<p className="pt-3">{planets[0][id].nombre}</p>
					</p>
					<p className="card-text">
						Population
						<p className="pt-3">{planets[0][id].population}</p>
					</p>
					<p className="card-text">
						Climate
						<p className="pt-3">{planets[0][id].climate}</p>
					</p>
					<p className="card-text">
						Terrain
						<p className="pt-3">{planets[0][id].terrain}</p>
					</p>
					<p className="card-text">
						Gravity
						<p className="pt-3">{planets[0][id].gravity}</p>
					</p>
				</div>
				<button
					type="button"
					className="btn btn-primary col-2 mt-3"
					onClick={() => {
						navegar(-1);
					}}>
					Go Back
				</button>
			</div>
		: ""
}
		</>
	);
};

export default Details;