import React from "react";
import styled from "styled-components";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BrilliantsComp = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4.6,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		// autoplaySpeed: 5000,
		cssEase: "linear",
	};
	return (
		<Container>
			<h1>
				Brilliant minds and companies
				<br /> come together to build the future
			</h1>

			<Wrapper>
				<Slider {...settings}>
					<SliderCard bg='coral' />
					<SliderCard bg='#ff8ea6' />
					<SliderCard bg='#9ad9fd' />
					<SliderCard bg='silver' />
					<SliderCard bg='#5bf8c1' />
					<SliderCard bg='#E0F1EB' />
					<SliderCard bg='#E0F1EB' />
					<SliderCard bg='#E0F1EB' />
				</Slider>
			</Wrapper>
		</Container>
	);
};

export default BrilliantsComp;

const Hold = styled.div`
	width: 100%;
	height: 400px;
	background-color: red;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 60px;
	padding-bottom: 50px;

	h1 {
		text-align: center;
		font-size: 40px;
	}
`;
const Wrapper = styled.div`
	/* display: flex; */
	width: 100%;
	/* height: 300px; */
	overflow: hidden;
	/* background-color: black; */
`;
