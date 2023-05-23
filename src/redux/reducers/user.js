const FETCH_USERDATA_REQUEST = 'FETCH_USERDATA_REQUEST';
const FETCH_USERDATA_SUCCESS = 'FETCH_USERDATA_SUCCESS';
const FETCH_USERDATA_FAIL = 'FETCH_USERDATA_FAIL';
const FETCH_USERPOSTS_REQUEST = 'FETCH_USERPOSTS_REQUEST';
const FETCH_USERPOSTS_SUCCESS = 'FETCH_USERPOSTS_SUCCESS';
const FETCH_USERPOSTS_FAIL = 'FETCH_USERPOSTS_FAIL';
export const FETCH_USER = 'FETCH_USER';

const initialState = {
	userData: {
		content: {},
		loading: true,
		error: null,
	},
	userPosts: {
		content: [],
		loading: true,
		error: null,
	},
};

function user(state = initialState, action) {
	switch (action.type) {
		case FETCH_USERDATA_REQUEST:
			return { ...state, userData: { loading: true, error: null } };
		case FETCH_USERDATA_SUCCESS:
			return {
				...state,
				userData: { content: action.payload, loading: false, error: null },
			};
		case FETCH_USERDATA_FAIL:
			return { ...state, userData: { loading: false, error: action.payload } };
		case FETCH_USERPOSTS_REQUEST:
			return { ...state, userPosts: { loading: true, error: null } };
		case FETCH_USERPOSTS_SUCCESS:
			return {
				...state,
				userPosts: { content: action.payload, loading: false, error: null },
			};
		case FETCH_USERPOSTS_FAIL:
			return { ...state, userPosts: { loading: false, error: action.payload } };
		default:
			return state;
	}
}

export const userDataRequestAction = () => ({ type: FETCH_USERDATA_REQUEST });
export const userDataSuccessAction = (payload) => ({ type: FETCH_USERDATA_SUCCESS, payload });
export const userDataFailAction = (payload) => ({ type: FETCH_USERDATA_FAIL, payload });

export const userPostsRequestAction = () => ({ type: FETCH_USERPOSTS_REQUEST });
export const userPostsSuccessAction = (payload) => ({ type: FETCH_USERPOSTS_SUCCESS, payload });
export const userPostsFailAction = (payload) => ({ type: FETCH_USERPOSTS_FAIL, payload });

export const fetchUserAction = (payload) => ({ type: FETCH_USER, payload });

export const selectUserData = (state) => state.user.userData;
export const selectUserPosts = (state) => state.user.userPosts;

export default user;
