import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
	// Conditional Rendering
	let message;
	if (cart.length === 0) {
		message = <p>Please buy at least one Item</p>;
	} else if (cart.length === 1) {
		message = (
			<div>
				<h3>Buy Another item</h3>
			</div>
		);
	} else {
		message = <p>Thanns For Buying</p>;
	}
	return (
		<div>
			<h2 className={cart.length === 2 ? `blue` : `green`}>Orders Summary</h2>
			<p className={`bold ${cart.length === 2 ? "yellow" : "purple"}`}>
				Orders Quanty: {cart.length}
			</p>
			{cart.map((tshirt) => (
				<p key={tshirt._id}>
					{tshirt.name}{" "}
					<button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
				</p>
			))}
			{message}
			{cart.length === 3 ? <p>You Added Three Itema</p> : <p>Buy Everything</p>}
			<p>And Operator</p>
			{cart.length === 2 && <h3>You Added Two Itema</h3>}
			<p>OR Operator</p>
			{cart.length === 4 || <h3>Keep Add Item To Reich To 4 Item</h3>}
		</div>
	);
};

export default Cart;
