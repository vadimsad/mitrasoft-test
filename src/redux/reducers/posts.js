const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const FETCH_POSTS = 'FETCH_POSTS';

const initialState = {
	posts: [],
	loading: true,
	error: null,
};

function posts(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS_REQUEST:
			return { ...state, loading: true, error: null };
		case FETCH_POSTS_SUCCESS:
			return { ...state, posts: [...action.payload], loading: false };
		case FETCH_POSTS_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
}

export const postsRequestAction = () => ({ type: FETCH_POSTS_REQUEST });
export const postsSuccessAction = (payload) => ({ type: FETCH_POSTS_SUCCESS, payload });
export const postsFailAction = (payload) => ({ type: FETCH_POSTS_FAIL, payload });
export const fetchPostsAction = () => ({ type: FETCH_POSTS });

export const selectPostsData = (state) => state.posts;

export default posts;
