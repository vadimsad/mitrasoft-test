const ADD_POSTS = 'ADD_POSTS';
export const FETCH_POSTS = 'FETCH_POSTS';

const initialState = [];

function posts(state = initialState, action) {
	switch (action.type) {
		case ADD_POSTS:
			return [...state, ...action.payload];
		default:
			return state;
	}
}

export const addPostsAction = (payload) => ({ type: ADD_POSTS, payload });
export const fetchPostsAction = () => ({ type: FETCH_POSTS });

export default posts;
