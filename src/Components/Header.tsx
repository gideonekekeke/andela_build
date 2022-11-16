import React from "react";
import styled from "styled-components";
import log from "./assets/logo.svg";
import log2 from "./assets/logo2.svg";

const Header = () => {
	const [show, setShow] = React.useState<boolean>(false);

	const changeNav = () => {
		if (window.scrollY >= 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	window.addEventListener("scroll", changeNav);

	console.log(window.scrollY);

	return (
		<>
			{show ? (
				<Container cl='black' bg='white'>
					<Logo src={log2} />
					<Navigation>
						<Nav>For Technology Experts</Nav>
						<Nav>Business</Nav>
						<Nav>Enterprise</Nav>
						<Nav>About Us</Nav>
						<ButtonHold>
							<Button cl='black' bg='' bd='1px solid black' wd='150px'>
								Apply For Jobs
							</Button>
							<Button cl='black' bg='#56C870' bd='' wd='120px'>
								Hire Talents
							</Button>
						</ButtonHold>
					</Navigation>
				</Container>
			) : (
				<Container cl='white' bg='none'>
					<Logo src={log} />
					<Navigation>
						<Nav>For Technology Experts</Nav>
						<Nav>Business</Nav>
						<Nav>Enterprise</Nav>
						<Nav>About Us</Nav>
						<ButtonHold>
							<Button cl='white' bg='' bd='1px solid white' wd='150px'>
								Apply For Jobs
							</Button>
							<Button cl='black' bg='#56C870' bd='' wd='120px'>
								Hire Talents
							</Button>
						</ButtonHold>
					</Navigation>
				</Container>
			)}
		</>
	);
};

export default Header;

const ButtonHold = styled.div`
	display: flex;
	align-items: center;
`;

const Button = styled.div<{ wd: string; bd: string; bg: string; cl: string }>`
	height: 40px;
	width: ${(props) => props.wd};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.bg};
	border: ${(props) => props.bd};
	border-radius: 50px;
	margin-left: 20px;
	color: ${(props) => props.cl};
	cursor: pointer;

	:hover {
		transform: scale(0.97);
		transition: all 350ms;
	}
`;

const Logo = styled.img`
	height: 49px;
	/* margin-right: 50px; */
	color: white;
	margin-left: 30px;
`;
const Navigation = styled.div`
	display: flex;
	align-items: center;
	margin-right: 100px;
`;
const Nav = styled.div`
	margin-right: 30px;
	font-size: 19px;
	font-weight: 400;
	cursor: pointer;

	:hover {
		color: gray;
		transition: all 350ms;
	}
`;
const Container = styled.div<{ bg: string; cl: string }>`
	height: 70px;
	width: 100%;
	/* background-color: white; */
	background-color: ${(props) => props.bg};
	/* box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 999;
	color: ${(props) => props.cl};
	position: sticky;
	top: 0;
	transition: all 350ms;
`;
