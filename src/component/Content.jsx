import React from "react";
import BlueCard from "./BlueCard.jsx";
import RedCard from "./RedCard.jsx";
import GreenCard from "./GreenCard.jsx";
import GrayCard from "./GrayCard.jsx";

function List() {
	return (
		<React.Fragment>
			<BlueCard />
			<RedCard />
			<GreenCard />
			<GrayCard />
		</React.Fragment>
	);
}
export default List;
