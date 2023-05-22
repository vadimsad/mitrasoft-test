import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/api';
import { FETCH_POSTS, postsRequestAction, postsSuccessAction } from '../reducers/posts';

function* fetchPostsWorker() {
	try {
		yield put(postsRequestAction());

		const res = yield call(api.getPosts);
		if (res.status === 200) {
			yield put(postsSuccessAction(res.data));
		} else {
			console.log(res);
		}
	} catch (error) {
		console.log(error);
	}
}

export function* postsWatcher() {
	yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
