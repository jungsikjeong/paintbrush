import { combineReducers } from 'redux';
import post from './post';

const rootReducer = combineReducers({
  post,
});

export function* rootSaga() {
  yield all();
}

export default rootReducer;
