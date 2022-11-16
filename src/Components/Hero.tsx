import React from "react";
import styled from "styled-components";
import pic from "./assets/hero.png";
import Header from "./Header";

const Hero = () => {
	return (
		<Container>
			<Header />
			<Cont>
				<h1>
					Discover <span>brilliant</span> talent
					<br /> around the world
				</h1>
				<p>
					Join Andela to build your team with developers, engineers, product
					designers, and the best remote technology experts.
				</p>
				<ButtonHold>
					<Button bg='white' bd='1px solid black' wd='170px'>
						Apply For Jobs
					</Button>
					<Button bg='#56C870' bd='' wd='150px'>
						Hire Talents
					</Button>
				</ButtonHold>
			</Cont>
		</Container>
	);
};

export default Hero;

const Cont = styled.div`
	margin-left: 20px;
	z-index: 10;
	color: white;
	margin-top: 70px;

	h1 {
		font-size: 60px;
	}
	span {
		font-style: italic;
	}
`;
const ButtonHold = styled.div`
	display: flex;
	align-items: center;
`;

const Button = styled.div<{ wd: string; bd: string; bg: string }>`
	height: 70px;
	width: ${(props) => props.wd};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.bg};
	border: ${(props) => props.bd};
	border-radius: 50px;
	margin-right: 20px;
	cursor: pointer;
	color: black;

	:hover {
		transform: scale(0.97);
		transition: all 350ms;
	}
`;

const Container = styled.div`
	height: 600px;
	width: 100%;
	background-color: black;
	background-image: url("https://andela.com/wp-content/uploads/2022/03/header.jpeg");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	/* font-size: "Inria Serif", Garamond, serif; */
	/* justify-content: center; */
	/* align-items: center; */
	flex-direction: column;
	position: relative;
	background-attachment: fixed;

	::before {
		content: "";
		height: 100%;
		width: 100%;
		background-color: rgba(3%, 16%, 16%, 0.3);
		position: absolute;
	}
`;
