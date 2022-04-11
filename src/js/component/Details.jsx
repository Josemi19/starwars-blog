import React from "react";
import { useNavigate } from "react-router";
import "../../styles/details.css"
import { useContext } from "react";
import {Context} from "../store/appContext"
import { useParams } from "react-router";

const Details = () => {
	let navegar = useNavigate();
	let {store} = useContext(Context)
	let {people, planets, vehicles} = store
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
								<h1 className="card-title">{people[id].properties.name}</h1>
								<p className="card-text">
									{people[id].description}
								</p>
							</div>
						</div>
					</div>
					<div className="card-footer card-footer">
						<p className="card-text">
							Name
							<p className="pt-3">{people[id].properties?.name}</p>
						</p>
						<p className="card-text">
							BirthYear
							<p className="pt-3">{people[id].properties?.birth_year}</p>
						</p>
						<p className="card-text">
							Height
							<p className="pt-3">{people[id].properties?.height}</p>
						</p>
						<p className="card-text">
							Hair-Color
							<p className="pt-3">{people[id].properties?.hair_color}</p>
						</p>
						<p className="card-text">
							Eyes-Color
							<p className="pt-3">{people[id].properties?.eye_color}</p>
						</p>
						<p className="card-text">
							Gender
							<p className="pt-3">{people[id].properties?.gender}</p>
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
							<h1 className="card-title">{planets[id].properties?.name}</h1>
							<p className="card-text">
								{planets[id].description}
							</p>
						</div>
					</div>
				</div>
				<div className="card-footer card-footer">
					<p className="card-text">
						Name
						<p className="pt-3">{planets[id].properties?.name}</p>
					</p>
					<p className="card-text">
						Population
						<p className="pt-3">{planets[id].properties?.population}</p>
					</p>
					<p className="card-text">
						Climate
						<p className="pt-3">{planets[id].properties?.climate}</p>
					</p>
					<p className="card-text">
						Terrain
						<p className="pt-3">{planets[id].properties?.terrain}</p>
					</p>
					<p className="card-text">
						Gravity
						<p className="pt-3">{planets[id].properties?.gravity}</p>
					</p>
					<p className="card-text">
						Diameter
						<p className="pt-3">{planets[id].properties?.diameter}</p>
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
			: nature == "vehicles" ? //TERCER IF
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
						<h1 className="card-title">{vehicles[id].properties?.name}</h1>
						<p className="card-text">
							{vehicles[id].description}
						</p>
					</div>
				</div>
			</div>
			<div className="card-footer card-footer">
				<p className="card-text">
					Name
					<p className="pt-3">{vehicles[id].properties?.name}</p>
				</p>
				<p className="card-text">
					Model
					<p className="pt-3">{vehicles[id].properties?.model}</p>
				</p>
				<p className="card-text">
					Max Speed
					<p className="pt-3">{vehicles[id].properties?.max_atmosphering_speed}</p>
				</p>
				<p className="card-text">
					Manufacturer
					<p className="pt-3">{vehicles[id].properties?.manufacturer}</p>
				</p>
				<p className="card-text">
					Vehicle Class
					<p className="pt-3">{vehicles[id].properties?.vehicle_class}</p>
				</p>
				<p className="card-text">
					Passengers
					<p className="pt-3">{vehicles[id].properties?.passengers}</p>
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