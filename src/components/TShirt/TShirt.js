import React from "react";
import "./TShirts.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
	const { name, picture, price } = tshirt;
	return (
		<div className="t-shirt">
			<img src={picture} alt="" />
			<h2>{name}</h2>
			<h3>Price: {price}</h3>
			<button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
		</div>
	);
};

export default TShirt;
