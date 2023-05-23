import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/api';
import {
	FETCH_COMMENTS,
	commentsRequestAction,
	commentsSuccessAction,
	commentsFailAction,
} from '../reducers/comments';

function* fetchCommentsWorker(action) {
	const postId = action.payload;
	try {
		yield put(commentsRequestAction({ postId }));

		const res = yield call(api.getPostComments, postId);
		yield put(commentsSuccessAction({ postId, comments: res.data }));
	} catch (error) {
		yield put(
			commentsFailAction({
				postId,
				error: `Не удалось получить список комментариев :( ${error.message}`,
			}),
		);
	}
}

export function* commentsWatcher() {
	yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
