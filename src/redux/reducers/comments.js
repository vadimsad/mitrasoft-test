const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
const FETCH_COMMENTS_FAIL = 'FETCH_COMMENTS_FAIL';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

const initialState = {};

function comments(state = initialState, action) {
	switch (action.type) {
		case FETCH_COMMENTS_REQUEST:
			return { ...state, [action.payload.postId]: { loading: true, error: null } };
		case FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				[action.payload.postId]: { comments: action.payload.comments, loading: false, error: null },
			};
		case FETCH_COMMENTS_FAIL:
			return { ...state, [action.payload.postId]: { loading: false, error: action.payload.error } };
		default:
			return state;
	}
}

export const commentsRequestAction = (payload) => ({ type: FETCH_COMMENTS_REQUEST, payload });
export const commentsSuccessAction = (payload) => ({ type: FETCH_COMMENTS_SUCCESS, payload });
export const commentsFailAction = (payload) => ({ type: FETCH_COMMENTS_FAIL, payload });
export const fetchCommentsAction = (payload) => ({ type: FETCH_COMMENTS, payload });

export const selectCommentsData = (state) => state.comments;
export const selectCommentsByPostId = (postId) => (state) => state.comments[postId];

export default comments;
