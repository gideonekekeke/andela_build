import React from "react";
import styled from "styled-components";
import pic1 from "./assets/t1.svg";
import pic2 from "./assets/t2.svg";
import pic3 from "./assets/t3.svg";
import pic4 from "./assets/t4.svg";
import pic5 from "./assets/t5.svg";
import pic6 from "./assets/t6.svg";

const TrustedBy: React.FC = () => {
	return (
		<Container>
			<h1>Trusted by</h1>
			<Wrapper>
				<Image src={pic5} />
				<Image src={pic6} />
				<Image src={pic4} />
				<Image src={pic3} />
				<Image src={pic2} />
				<Image src={pic1} />
			</Wrapper>
		</Container>
	);
};

export default TrustedBy;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 95%;
	margin-top: 5px;
`;
const Image = styled.img`
	height: 20px;
`;
const Container = styled.div`
	/* height: 150px; */
	width: 100%;
	background: #e0f1eb;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
`;
