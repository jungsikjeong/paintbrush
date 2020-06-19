import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import canvas from './canvas';

const rootReducer = combineReducers({
  canvas,
});

export function* rootSaga() {
  yield all();
}

export default rootReducer;
