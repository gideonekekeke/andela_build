import React from "react";
import styled from "styled-components";

interface Iprops {
	bg: string;
}
const SliderCard: React.FC<Iprops> = ({ bg }) => {
	return (
		<Container>
			<Card bg={bg}>
				<ProfileContainer>
					<Profile />
					<Name>Name</Name>
				</ProfileContainer>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in
					quos repellat praesentium laboriosam nobis rerum exercitationem magnam
					aspernatur odit minima voluptatibus neque molestias provident,
					quisquam nostrum, harum, officiis recusandae.
				</p>
			</Card>
		</Container>
	);
};

export default SliderCard;

const Card = styled.div<{ bg: string }>`
	height: 250px;
	width: 220px;
	background: ${(props) => props.bg};
	padding: 20px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	margin: 10px;
	border-radius: 5px;
`;
const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Profile = styled.div`
	height: 40px;
	width: 40px;
	background-color: silver;
	border-radius: 50%;
`;
const Name = styled.div`
	margin-left: 20px;
`;
const Container = styled.div``;
