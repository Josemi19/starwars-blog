import React from 'react';

const Card = (category) => {
    return (
        <>
            {category == "people" ? <div className="container ms-5 mb-3">
				<div className="d-inline-flex">
					{personajes.map((personajes) => (
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
								<Link
									to={`characters/${personajes.uid}`}
									className="btn btn-primary">
									View Details
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
            : ""
        }
        </>
    );
};

export default Card;