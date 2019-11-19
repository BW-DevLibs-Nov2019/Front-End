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
} from "../actions";

const initialState = {
	myLibs: [        
	{
		title: "Ted Talks",
		blanks: ["silly", "billy", "ahhh", "4"],
		story: function() { return `I once ${this.blanks[0]}, and then i ${this.blanks[1]}, so that I could ${this.blanks[2]}, and then ${this.blanks[3]}!`}
	},
	{
		title: "The Future",
		blanks: ["sad", "Charles", "running", "19"],
		story: function() { return `There ${this.blanks[0]}, and then i ${this.blanks[1]}, so that I could ${this.blanks[2]}, and then ${this.blanks[3]}!`}
	}
],
	devlibs: [
        {
            id: "1",
            title: "Ted Talks",
			blanks: ["verb", "noun", "adjective", "number"],
			story: function() { return `I once ${this.blanks[0]}, and then i ${this.blanks[1]}, so that I could ${this.blanks[2]}, and then ${this.blanks[3]}!`}
        },
        {
            id: "2",
            title: "The Future",
            blanks: ["verb", "noun", "adjective"]
        },
        {
            id: "3",
            title: "Star Wars",
			blanks: ["name", "adjective", "verb", "verb ending in 'ing", "verb ending in 'ing 2", "scary noun"],
			story: function() { return `Did you ever hear the tragedy of Darth ${this.blanks[0]} the ${this.blanks[1]}? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth 
			${this.blanks[0]} was a Dark Lord of the Sith, so powerful and so wise he could ${this.blanks[2]} to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from ${this.blanks[3]}. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was ${this.blanks[4]}, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic, he could save others from ${this.blanks[5]}, but not himself.`}
        }
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
				posts: action.payload,
			};
		case POST_START:
			return {
				...state,
				addingPost: true,
			};
		case POST_SUCCESS:
			return {
				...state,
				myLibs: [...state.myLibs, action.payload],
				addingPost: false,
			};
		case POST_FAILED:
			return {
				...state,
				myLibs: [...state.myLibs, action.payload],
				error: action.payload,
			};
		case UPDATING_START:
			return {
				...state,
				updatingPost: true,
			};
		case UPDATE_SUCCESS:
			return {
				...state,
				posts: [...state.posts, action.payload],
				updatingPost: false,
			};
		case UPDATE_FAILED:
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
			return {
				...state,
				deletingPost: false,
				posts: state.posts.filter(post => post.id !== action.payload),
			};
	}
};