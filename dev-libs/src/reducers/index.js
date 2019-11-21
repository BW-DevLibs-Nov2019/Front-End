import {
	POST_START,
	POST_SUCCESS,
	POST_FAILED,
	RETRIEVE_POSTS,
	UPDATING_START,
	UPDATE_SUCCESS,
	UPDATE_FAILED,
	DELETE_START,
	DELETE_SUCCESS,
	DELETE_FAILED
} from "../actions";

const initialState = {
	myLibs: [        
	// {
	// 	devlibid: Math.random().toString(36).substr(2, 9),
	// 	devlibtitle: "Ted Talks",
	// 	answerstrings: ["silly", "billy", "ahhh", "4"],
	// 	story: function() { return `I once ${this.answerstrings[0]}, and then i ${this.answerstrings[1]}, so that I could ${this.answerstrings[2]}, and then ${this.answerstrings[3]}!`}
	// },
	// {
	// 	devlibid: Math.random().toString(36).substr(2, 9),
	// 	devlibtitle: "The Future",
	// 	answerstrings: ["sad", "Charles", "running", "19"],
	// 	story: function() { return `There ${this.answerstrings[0]}, and then i ${this.answerstrings[1]}, so that I could ${this.answerstrings[2]}, and then ${this.answerstrings[3]}!`}
	// }
],
	devlibs: [
        {
            id: "1",
            title: "Ted Talks",
			answerstrings: ["verb", "noun", "adjective", "number"],
			story: function() { return `I once ${this.answerstrings[0]}, and then i ${this.answerstrings[1]}, so that I could ${this.answerstrings[2]}, and then ${this.answerstrings[3]}!`}
		},
        {
            id: "2",
            title: "BaseBall",
			answerstrings: ["verb", "verb ending in ing", "noun", "occupation", "number", "location", "verb 2", "adjective", "noun (plural)", "noun2"],
			story: function() { return `${this.answerstrings[0]} ball is a very exciting sport. Whether you are ${this.answerstrings[1]} the ball with a ${this.answerstrings[2]}, or you are the ${this.answerstrings[3]} and striking out ${this.answerstrings[4]} batters in a row, youll be having fun. You can also be the catcher, standing at ${this.answerstrings[5]} plate, ready to ${this.answerstrings[6]} the next person as he tries to make it ${this.answerstrings[5]}. But the best part of it is when someone hits a ${this.answerstrings[7]} slam when all the ${this.answerstrings[8]} are loaded during the last ${this.answerstrings[9]} to win the game.`}
        },
        {
            id: "3",
            title: "Star Wars",
			answerstrings: ["name", "adjective", "verb", "verb ending in 'ing", "verb ending in 'ing 2", "scary noun"],
			story: function() { return `Did you ever hear the tragedy of Darth ${this.answerstrings[0]} the ${this.answerstrings[1]}? Did you ever hear the tragedy of Darth ${this.answerstrings[0]} the ${this.answerstrings[1]}?Did you ever hear the tragedy of Darth ${this.answerstrings[0]} the ${this.answerstrings[1]}?Did you ever hear the tragedy of Darth ${this.answerstrings[0]} the ${this.answerstrings[1]}?Did you ever hear the tragedy of Darth ${this.answerstrings[0]} the ${this.answerstrings[5]}?`}
		},
    ],
	addingPost: false,
	deletingPost: false,
	updatingPost: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case RETRIEVE_POSTS:
			return {
				...state,
				myLibs: action.payload,
			};
		case POST_START:
			return {
				...state,
				addingPost: true,
			};
		case POST_SUCCESS:
			console.log("post worked!")
			console.log(action.payload)
			return {
				...state,
				myLibs: [...state.myLibs, action.payload],
				addingPost: false,
			};
		case POST_FAILED:
			console.log("post failed")
			console.log(action.payload)
			return {
				...state,
				error: action.payload,
				addingPost: false,
			};
		case UPDATING_START:
			return {
				...state,
				updatingPost: true,
			};
		case UPDATE_SUCCESS:
			console.log("update worked!")
			console.log(action.payload)
			return {
				...state,
				myLibs: state.myLibs.map(lib =>
					lib.devlibid === action.payload.devlibid ? action.payload : lib,
				),
				error: action.payload,
				updatingPost: false
			};
		case UPDATE_FAILED:
		console.log("update failed!")
			return {
				...state,
				error: action.payload,
			};
		case DELETE_START:
			return {
				...state,
				deletingPost: true,
			};
		case DELETE_SUCCESS:
			console.log("delete worked!")
			return {
				...state,
				deletingPost: false,
				myLibs: state.myLibs.filter(lib => lib.id !== action.payload),
			};
		case DELETE_FAILED:
			console.log("delete failed")
			return {
				...state,
			errror: action.payload,
			};
	}
};