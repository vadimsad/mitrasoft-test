import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/api';
import { FETCH_POSTS, addPostsAction } from '../reducers/posts';

function* fetchPostsWorker() {
	const { data } = yield call(api.getPosts);
	yield put(addPostsAction(data));
}

export function* postsWatcher() {
	yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
