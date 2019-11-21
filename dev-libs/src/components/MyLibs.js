import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostCard from "./PostCard";

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-bottom: 20px;
`;

const Holder = styled.div``;

const TopPosts = props => {

	return (
		<Holder>
			<Main>
                {props.myPosts.myLibs.map(lib => (
                    <div>
					<PostCard id={lib.id} title={lib.title} story={lib.story} blanks={lib.blanks} />	
                    </div>
                ))}
			</Main>
		</Holder>
	);
};

const mapStateToProps = state => {
	return {
		myPosts: state,
	};
};

export default connect(
	mapStateToProps,
	{},
)(TopPosts);