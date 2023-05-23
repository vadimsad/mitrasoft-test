import { put, takeEvery, call, fork } from 'redux-saga/effects';
import { api } from '../../api/api';
import {
	FETCH_USER,
	userDataRequestAction,
	userDataSuccessAction,
	userDataFailAction,
	userPostsRequestAction,
	userPostsSuccessAction,
	userPostsFailAction,
} from '../reducers/user';

function* fetchUserDataWorker(action) {
	const userId = action.payload;
	try {
		yield put(userDataRequestAction());

		const res = yield call(api.getUser, userId);
		yield put(userDataSuccessAction(res.data));
	} catch (error) {
		yield put(
			userDataFailAction(`Не удалось получить информацию о пользователе :( ${error.message}`),
		);
	}
}

function* fetchUserPostsWorker(action) {
	const userId = action.payload;
	try {
		yield put(userPostsRequestAction());

		const res = yield call(api.getUserPosts, userId);
		yield put(userPostsSuccessAction(res.data));
	} catch (error) {
		yield put(
			userPostsFailAction(`Не удалось получить список постов пользователя :( ${error.message}`),
		);
	}
}

function* fetchUserWorker(action) {
	yield fork(fetchUserDataWorker, action);
	yield fork(fetchUserPostsWorker, action);
}

export function* userWatcher() {
	yield takeEvery(FETCH_USER, fetchUserWorker);
}
