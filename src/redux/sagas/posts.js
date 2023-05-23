import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/api';
import {
	FETCH_POSTS,
	postsFailAction,
	postsRequestAction,
	postsSuccessAction,
} from '../reducers/posts';

function* fetchPostsWorker() {
	try {
		yield put(postsRequestAction());

		const res = yield call(api.getPosts);
		yield put(postsSuccessAction(res.data));
	} catch (error) {
		yield put(postsFailAction(`Не удалось получить посты :( ${error.message}`));
	}
}

export function* postsWatcher() {
	yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
