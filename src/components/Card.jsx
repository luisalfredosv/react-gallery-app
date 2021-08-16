import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
	return (
		<div
			className='card m-2'
			style={{
				width: "18rem",
			}}
		>
			<img className='card-img-top' src={img} alt='imagen.png' />
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
};

export default Card;
