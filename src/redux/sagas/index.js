import { all } from 'redux-saga/effects';
import { commentsWatcher } from './comments';
import { postsWatcher } from './posts';

export function* rootWatcher() {
	yield all([postsWatcher(), commentsWatcher()]);
}
