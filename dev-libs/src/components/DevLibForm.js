import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items:center;
`;
const FormBackground =styled.div`
	background: #3a405a;
	width: 30%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	border-radius: 6px;
	margin: 30px;
`;
const PostTitle = styled.label`
	font-size: 1.5rem;
	text-align: center;
	color: white;
	font-weight: 600;
	font-family: "Lato", sans-serif;
	padding-right: 20px;
	width: auto;
`;
const TitleInput = styled.input`
height: 30px;
width: 300px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
resize: none;
`;

const FormBackground2 =styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: #3a405a;
	width: 40%;
	height: 240px;
	padding: 10px;
	border-radius: 6px;
	margin-bottom: 30px;
`;
const PostTitle2 = styled.label`
	font-size: 1.5rem;
	text-align: center;
	color: white;
	font-weight: 600;
	font-family: "Lato", sans-serif;
	padding: 10px;
`;
const TitleInput2 = styled.textarea`
width: 90%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
resize: none;
`;

const Button = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 1rem;
	font-weight: 800;
	background-color: #de6e4b;
	color: #3a405a;
	text-align: center;
	text-decoration: none;
	margin: 10px;
	padding: 25px 50px;
	border-radius: 6px;
	:hover {
		color: white;
	}
`;

const PostForm = props => {
	const [newLib, setNewLib] = React.useState({
		title: "",
		description: "",
    });
    
    console.log(props.devlibs[0].story())
    console.log(props.devlibs[0])
    var number = (Number(props.match.params.id)-1)

	const handleChange = e => {
		setNewLib({ ...setNewLib, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.addPost(setNewLib, redirect);
	};

	const redirect = () => {
		props.history.push("/top-posts");
	};

	return (
		<Form onSubmit={handleSubmit}>
            {props.devlibs[number].blanks.map(lib => (
			<FormBackground>
			<PostTitle htmlFor="postName">{lib}:</PostTitle>
			<TitleInput
				type="text"
				name={`${lib}`}
				onChange={handleChange}
				placeholder={lib}
				value={setNewLib.postName}
			/>
			</FormBackground>
            ))}
			<Button type="submit">Add Post</Button>
		</Form>
	);
};

const mapStateToProps = state => {
	return {
		devlibs: state.devlibs,
	};
};

export default connect(
	mapStateToProps,
	{ addPost },
)(PostForm);