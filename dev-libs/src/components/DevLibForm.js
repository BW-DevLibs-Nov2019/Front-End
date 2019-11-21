import React from "react";
import { connect } from "react-redux";
import { addDevLib } from "../actions";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items:center;
`;
const FormBackground =styled.div`
	background: #7e8d85;
	flex-direction: column;
	width: 30%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	border-radius: 6px;
	margin: 10px;
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

const Button = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 1rem;
	font-weight: 800;
	background-color: #684943;
	color: #d1d5de;
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

    var number = (Number(props.match.params.id)-1)
	const [newLib, setNewLib] = React.useState({

    });
    
    //console.log("new lib",newLib)

	const handleChange = e => {
		setNewLib({ ...newLib, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {

		e.preventDefault();

		var result = {		
			devlibtitle: props.devlibs[number].title,
			answerstrings: Object.values(newLib),
			story: props.devlibs[number].story
		}


		console.log(result)
		var finalparagraph = result.story();

		var result2 = {		
			devlibtitle: props.devlibs[number].title,
			answerstrings: Object.values(newLib),
			paragraph: finalparagraph,
			story: "story"
		}
		console.log(result2)
		props.addDevLib(result2);
		redirect();
	};

	const redirect = () => {
		props.history.push("/my-libs");
	};

	return (
		<Form onSubmit={handleSubmit}>
            {props.devlibs[number].answerstrings.map(lib => (
			<FormBackground>
			<PostTitle htmlFor="postName">{lib}:</PostTitle>
			<TitleInput
				type="text"
				name={lib}
				onChange={handleChange}
				placeholder={`Please enter a ${lib}`}
				value={newLib.lib}
			/>
			</FormBackground>
            ))}
			<Button type="submit">Create Dev-Lib</Button>
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
	{ addDevLib },
)(PostForm);
