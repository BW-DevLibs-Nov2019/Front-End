  
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { deletePost, updatePost } from "../actions";
import styled from "styled-components";
import {TimelineMax, Back} from "gsap";

const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	background: #b3bfb8 ;
	border: 5px solid #684943;
	transition: 0.3s;
	width: 40%;
	padding: 10px 20px 10px 20px;
	margin: 20px;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;

const Title = styled.h1`
	margin: 10px;
	font-size: 2.5rem;
	color: #353238;
`;

const Paragraph = styled.p`
	padding: 5px;
	font-size: 1.2rem;
	text-align: left;
	color: #353238;
`;

const Button = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 1rem;
	font-weight: 800;
	background-color: #7e8d85;
	color: white;
	padding: 2px 20px;
	text-align: center;
	text-decoration: none;
	margin: 10px;
	border-radius: 6px;
	:hover {
		background-color: #684943;
		color: #b3bfb8;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;
const FormBackground = styled.div`
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

const Button2 = styled.button`
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

function PostCard(props) {
    console.log(props)
	let cardRef = useRef(null);
	const [animation2, setAnimation2] = useState(null);
	const [tl] = useState(new TimelineMax({paused: true}));
	useEffect(() => {
		setAnimation2(
		  tl
		  .to(cardRef, 0.4, {
			transformOrigin: "center center",
			ease: Back.easeIn.config( 1.4),
			scale: 0.1,
		  },'s+=0.25')
		  .to(cardRef, 0.4, {
			opacity: 0,
			display: "none"
		  },'s+=.75'),
		  );
	  },[tl]);

	const deletePost = id => {
		props.deletePost(id);
	};

	const [updatedLib, setUpdatedLib] = React.useState({});

	const [isEditing, setIsEditing] = useState(false);

	const handleSubmit = e => {
        e.preventDefault();
        var result = { 	
            id: Date.now(), 			
			title: props.title,
			blanks: Object.values(updatedLib),
			story: props.story}
		props.updatePost(props.id, result);
		setIsEditing(false);
	};

	const handleChange = e => {
		setUpdatedLib({ ...updatedLib, [e.target.name]: e.target.value });
	};

	const test = props => {	
	animation2.play()	
	setTimeout(function() { deletePost(props.id) }, 2000);
	}

	if (isEditing) {
		return (
			<Form onSubmit={handleSubmit}>
                {props.blanks.map(lib => (
				<FormBackground>
					<TitleInput
						type="text"
						name={lib}
						onChange={handleChange}
						placeholder={`${lib}`}
						value={updatedLib.lib}
					/>
				</FormBackground>
                ))}
				<Button2 type="submit">Update Post</Button2>
			</Form>
		);
	} else {
		return (
			<Card ref={element => {cardRef = element;}}>
				<Title>{props.title}</Title>
				<Paragraph>{props.story()}</Paragraph>
				<Button onClick={() =>test(props)}>Delete</Button>
				<Button onClick={() => setIsEditing(true)}>Edit</Button>
			</Card>
		);
	}
}

export default connect(
	null,
	{ deletePost, updatePost },
)(PostCard);