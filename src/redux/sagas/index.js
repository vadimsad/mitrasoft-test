import { all } from 'redux-saga/effects';
import { commentsWatcher } from './comments';
import { postsWatcher } from './posts';
import { userWatcher } from './user';

export function* rootWatcher() {
	yield all([postsWatcher(), commentsWatcher(), userWatcher()]);
}
