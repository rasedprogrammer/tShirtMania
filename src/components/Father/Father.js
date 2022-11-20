import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Father = ({ house, ring }) => {
	return (
		<div>
			<h2>Father</h2>
			<p>
				<small>{house}</small>
			</p>
			<section className="flex">
				<Myself ring={ring} house={house}></Myself>
				<Brother house={house}></Brother>
				<Sister house={house}></Sister>
			</section>
		</div>
	);
};

export default Father;
