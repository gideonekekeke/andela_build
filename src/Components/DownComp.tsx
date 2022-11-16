import React from "react";
import styled from "styled-components";
const DownComp = () => {
	return (
		<Container>
			<h1>
				Andela Launches New Platform to Power the Future of Customized Work
			</h1>
			<Button bg='#56C870' bd='' wd='200px'>
				Find Out More
			</Button>
		</Container>
	);
};

export default DownComp;

const Button = styled.div<{ wd: string; bd: string; bg: string }>`
	height: 70px;
	width: ${(props) => props.wd};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.bg};
	border: ${(props) => props.bd};
	border-radius: 50px;
	margin-right: 200px;
	cursor: pointer;
	color: black;

	:hover {
		transform: scale(0.97);
		transition: all 350ms;
	}
`;

const Container = styled.div`
	// height: 150px;
	width: 100%;
	background-color: #173b3f;
	display: flex;
	color: white;
	align-items: center;
	justify-content: space-between;
	// padding: 10px;

	h1 {
		width: 600px;
		margin-left: 20px;
	}
`;
