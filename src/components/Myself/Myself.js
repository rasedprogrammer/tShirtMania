import React from "react";
import Special from "../Special/Special";

const Myself = ({ house, ring }) => {
	return (
		<div>
			<h3>Myself</h3>
			<p>
				<small>House: {house}</small>
				<section className="flex">
					<Special ring={ring}></Special>
				</section>
			</p>
		</div>
	);
};

export default Myself;
