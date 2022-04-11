import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState} from "react";
import { Context } from "../store/appContext";

const Characters = () => {
	const {store, actions} = useContext(Context)
	const [added, setAdded] = useState(false)

	return (
		<>
			<h1 className="ms-5 header">Characters</h1>
			<div className="container ms-5 mb-3 scroll">
				<div className="d-inline-flex">
					{store.people.map((personajes) => (
						<div key={personajes.uid} className="card col-2 m-3">
							<img
								src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									{personajes.properties.name}
								</h5>
								<p> Gender: {personajes.properties.gender} <br />
								    Hair Color: {personajes.properties.hair_color} <br />
									Eye Color: {personajes.properties.eye_color}
								</p>
								
                                <div className="container d-flex justify-content-between">
                                    <Link
                                        to={`people/${personajes.uid-1}`}
                                        className="btn btn-primary">
                                        View Details
                                    </Link>
                                    <button
                                        className="btn btn-danger bg-light" onClick={()=>{
											actions.addFavs(personajes.properties.name)
											setAdded(true)
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