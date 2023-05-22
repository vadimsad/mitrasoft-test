import { all } from 'redux-saga/effects';
import { postsWatcher } from './posts';

export function* rootWatcher() {
	yield all([postsWatcher()]);
}
