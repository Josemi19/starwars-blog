import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Planets = () => {
    const {actions, store} = useContext(Context)
    return (
        <>
            <h1 className="ms-5 header">Planets</h1>
			<div className="container ms-5 mb-3 scroll">
				<div className="d-inline-flex">
					{store.planets.map((planetas) => (
						<div key={planetas.uid} className="card col-2 m-3">
							<img
								src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									{planetas.properties.name}
								</h5>
								<p> Population: {planetas.properties.population} <br />
									Terrain: {planetas.properties.terrain}
								</p>

								<div className="container d-flex justify-content-between">
									<Link
										to={`planets/${planetas.uid-1}`}
										className="btn btn-primary">
										View Details
									</Link>
									<button
											className="btn btn-danger bg-light" onClick={()=>{
												actions.addFavs(planetas.properties.name)
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

export default Planets;