import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Characters = () => {
	const {store, actions} = useContext(Context)
    const [list, setList] = useState([])

	return (
		<>
			<h1 className="ms-5 header">Characters</h1>
			<div className="container ms-5 mb-3 scroll">
				<div className="d-inline-flex">
					{store.character.map((personajes) => (
						<div key={personajes.uid} className="card col-2 m-3">
							<img
								src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									{personajes.name}
								</h5>
                                <div className="container d-flex justify-content-between">
                                    <Link
                                        to={`people/${personajes.uid}`}
                                        className="btn btn-primary">
                                        View Details
                                    </Link>
                                    <button
                                        className="btn btn-danger" onClick={()=>{
                                            setList([...list, personajes.name])
                                        }}>
                                        <i className="fa-regular fa-heart"></i>
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