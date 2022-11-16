import React from "react";
import BrilliantsComp from "./BrilliantsComp";
import DownComp from "./DownComp";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";

const HomeScreen = () => {
	return (
		<div>
			<Hero />
			<DownComp />
			<TrustedBy />
			<BrilliantsComp />
		</div>
	);
};

export default HomeScreen;
