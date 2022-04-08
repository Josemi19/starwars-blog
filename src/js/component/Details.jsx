import React from "react";
import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import "../../styles/details.css"

const Details = () => {
	let navegar = useNavigate();
	let params = useParams();

	const [detalles, setDetalles] = useState({});

	const getDetalles = async () => {
		let response = await fetch(
			`https://www.swapi.tech/api/${params.nature}/${params.id}`
		);
		let data = await response.json();
		setDetalles(data.result);
	};


	useEffect(() => {
		getDetalles();
	}, []);


	return (
		<>
			{params.nature == "people" ? //PRIMER IF
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
								<h1 className="card-title">{detalles.properties?.name}</h1>
								<p className="card-text">
									{detalles.description}
								</p>
							</div>
						</div>
					</div>
					<div className="card-footer card-footer">
						<p className="card-text">
							Name
							<p className="pt-3">{detalles.properties?.name}</p>
						</p>
						<p className="card-text">
							BirthYear
							<p className="pt-3">{detalles.properties?.birth_year}</p>
						</p>
						<p className="card-text">
							Height
							<p className="pt-3">{detalles.properties?.height}</p>
						</p>
						<p className="card-text">
							Hair-Color
							<p className="pt-3">{detalles.properties?.hair_color}</p>
						</p>
						<p className="card-text">
							Eyes-Color
							<p className="pt-3">{detalles.properties?.eye_color}</p>
						</p>
						<p className="card-text">
							Gender
							<p className="pt-3">{detalles.properties?.gender}</p>
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
				: params.nature == "planets" ? //SEGUNDO IF
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
							<h1 className="card-title">{detalles.properties?.name}</h1>
							<p className="card-text">
								{detalles.description}
							</p>
						</div>
					</div>
				</div>
				<div className="card-footer card-footer">
					<p className="card-text">
						Name
						<p className="pt-3">{detalles.properties?.name}</p>
					</p>
					<p className="card-text">
						BirthYear
						<p className="pt-3">{detalles.properties?.birth_year}</p>
					</p>
					<p className="card-text">
						Height
						<p className="pt-3">{detalles.properties?.height}</p>
					</p>
					<p className="card-text">
						Hair-Color
						<p className="pt-3">{detalles.properties?.hair_color}</p>
					</p>
					<p className="card-text">
						Eyes-Color
						<p className="pt-3">{detalles.properties?.eye_color}</p>
					</p>
					<p className="card-text">
						Gender
						<p className="pt-3">{detalles.properties?.gender}</p>
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
			: params.nature == "vehicles" ? //TERCER IF
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
						<h1 className="card-title">{detalles.properties?.name}</h1>
						<p className="card-text">
							{detalles.description}
						</p>
					</div>
				</div>
			</div>
			<div className="card-footer card-footer">
				<p className="card-text">
					Name
					<p className="pt-3">{detalles.properties?.name}</p>
				</p>
				<p className="card-text">
					BirthYear
					<p className="pt-3">{detalles.properties?.birth_year}</p>
				</p>
				<p className="card-text">
					Height
					<p className="pt-3">{detalles.properties?.height}</p>
				</p>
				<p className="card-text">
					Hair-Color
					<p className="pt-3">{detalles.properties?.hair_color}</p>
				</p>
				<p className="card-text">
					Eyes-Color
					<p className="pt-3">{detalles.properties?.eye_color}</p>
				</p>
				<p className="card-text">
					Gender
					<p className="pt-3">{detalles.properties?.gender}</p>
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