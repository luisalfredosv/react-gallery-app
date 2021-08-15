import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
	return (
		<div
			className='card'
			style={{
				width: "15rem",
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
