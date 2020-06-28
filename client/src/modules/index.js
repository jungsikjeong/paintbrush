import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import canvas from './canvas';
import loading from './loading';
import user, { userSaga } from './user';
import toggle from './toggle';

const rootReducer = combineReducers({
  auth,
  user,
  canvas,
  loading,
  toggle,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}

export default rootReducer;
