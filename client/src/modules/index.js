import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import post, { postSaga } from './post';
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
  post,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postsSaga(), postSaga()]);
}

export default rootReducer;
