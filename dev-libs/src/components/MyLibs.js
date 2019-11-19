import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-bottom: 20px;
`;

const Holder = styled.div``;

const TopPosts = props => {

console.log(props.myPosts.myLibs)

	return (
		<Holder>
			<Main>
                {props.myPosts.myLibs.map(lib => (
                    <div>
                    <h1>{lib.title}</h1>
                    <p>{lib.story()}</p>
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