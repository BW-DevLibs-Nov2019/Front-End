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
	posts: [],
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
				posts: [...state.posts, action.payload],
				addingPost: false,
			};
		case POST_FAILED:
			return {
				...state,
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