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
		if (res.status === 200) {
			yield put(userDataSuccessAction(res.data));
		} else {
			yield put(userDataFailAction(res.message));
			console.log(res);
		}
	} catch (error) {
		yield put(userDataFailAction(res.message));
		console.log(error);
	}
}

function* fetchUserPostsWorker(action) {
	const userId = action.payload;
	try {
		yield put(userPostsRequestAction());

		const res = yield call(api.getUserPosts, userId);
		if (res.status === 200) {
			yield put(userPostsSuccessAction(res.data));
		} else {
			yield put(userPostsFailAction(res.message));
			console.log(res);
		}
	} catch (error) {
		yield put(userPostsFailAction(res.message));
		console.log(error);
	}
}

function* fetchUserWorker(action) {
	yield fork(fetchUserDataWorker, action);
	yield fork(fetchUserPostsWorker, action);
}

export function* userWatcher() {
	yield takeEvery(FETCH_USER, fetchUserWorker);
}
