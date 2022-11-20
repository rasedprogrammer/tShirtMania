import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
	const [money] = useContext(MoneyContext);
	return (
		<div>
			<h2>Uncle</h2>
			<p>
				<small>Total Money: {money}</small>
			</p>
		</div>
	);
};

export default Uncle;
