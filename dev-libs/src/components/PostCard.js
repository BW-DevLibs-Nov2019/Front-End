  
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
	align-items:center;
`;
const FormBackground =styled.div`
	background: #7e8d85;
	flex-direction: column;
	width: auto;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	border-radius: 6px;
	margin: 10px;
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

function PostCard(props) {
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

	  var teststuff = {
		  answerstrings: {
			  noun: "aaa",
			  noun2: "ccc",
			  verb: "bbb",
		  }
	  }

	const deletePost = id => {
		props.deletePost(id);
	};

	const [updatedLib, setUpdatedLib] = React.useState({
		devlibtitle: props.devlibtitle,
		paragraph: props.paragraph,
	});

	const [isEditing, setIsEditing] = useState(false);
	const handleSubmit = e => {
        e.preventDefault();
        var result = { 	
            devlibid: props.devlibid, 			
			devlibtitle: props.devlibtitle,
			answerstrings: Object.values(updatedLib),
			paragraph: updatedLib.paragraph
		} 
			
		props.updatePost(props.devlibid, result);
		setIsEditing(false);
	};

	const handleChange = e => {
		setUpdatedLib({ ...updatedLib, [e.target.name]: e.target.value });
	};

	const test = props => {	
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
	animation2.play()	
	setTimeout(function() { deletePost(props.devlibid) }, 2000);
	}

	if (isEditing) {
		return (
			<Form onSubmit={handleSubmit}>
				<FormBackground>
					<TitleInput
						type="text"
						name="paragraph"
						onChange={handleChange}
						value={updatedLib.paragraph}
					/>
				</FormBackground>
				<Button2 type="submit">Update Dev-Lib</Button2>
			</Form>
		);
	} else {
		return (
			<Card ref={element => {cardRef = element;}}>
				<Title>{props.devlibtitle}</Title>
				<Paragraph>{props.paragraph}</Paragraph>
				<Button onClick={() =>test(props)}>Delete</Button>
				<Button onClick={() => setIsEditing(true)}>Edit</Button>
                <Button onClick={() => window.location.href = `https://twitter.com/intent/tweet?text=${props.paragraph}`}>Tweet</Button>
			</Card>
		);
	}
}

export default connect(
	null,
	{ deletePost, updatePost },
)(PostCard);


//<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="yes" data-hashtags="dev-libs" data-lang="en" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>