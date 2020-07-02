import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import posts, { postsSaga } from './posts';
import toggle from './toggle';

const rootReducer = combineReducers({
  auth,
  user,
  write,
  posts,
  loading,
  toggle,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postsSaga()]);
}

export default rootReducer;
