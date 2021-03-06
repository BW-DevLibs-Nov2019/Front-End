import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { RETRIEVE_POSTS } from "../actions";
import styled from "styled-components";
import PostCard from "./PostCard";
import axiosWithAuth from "../utils/axiosWithAuth";

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding-bottom: 20px;
`;

const Holder = styled.div``;

const MyLibs = props => {

	const dispatch = useDispatch();
	useEffect(() => {
		const getMyLibs = () => {
			axiosWithAuth()
				.get(`devlibs/devlib/${localStorage.getItem('username')}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				})
				.then(res => {
					dispatch({ type: RETRIEVE_POSTS, payload: res.data });
				})
				.catch(error => {
					console.error("oh no", error);
				});
		};
		getMyLibs();
	}, [dispatch]);

	return (
		<Holder>
			<Main>
                {props.myPosts.myLibs.map(lib => (
					<PostCard key={lib.devlibid} devlibid={lib.devlibid} devlibtitle={lib.devlibtitle} paragraph={lib.paragraph} answerstrings={lib.answerstrings} />	
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
)(MyLibs);