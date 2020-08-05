import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

// 액션 생성 함수
const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const CANVAS_DATA = 'write/CANVAS_DATA'; // 캔버스 그림
const CANVAS_IS_DATA = 'write/CANVAS_IS_DATA'; // 그림 저장눌렀는지,안눌렀는지
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성

// 액션 발생 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const canvasData = createAction(CANVAS_DATA, (canvasData) => ({
  canvasData,
}));
export const canvasIsData = createAction(CANVAS_IS_DATA, (isData) => isData);
export const writePost = createAction(
  WRITE_POST,
  ({ title, body, canvasData }) => ({
    title,
    body,
    canvasData,
  }),
);

// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

// state
const initialState = {
  title: '',
  body: '',
  canvasData: '',
  isData: false,
  post: null,
  postError: null,
};

// 리듀서
const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CANVAS_DATA]: (state, { payload: canvasData }) => ({
      ...state,
      canvasData,
    }),
    [CANVAS_IS_DATA]: (state, { payload: isData }) => ({
      ...state,
      isData,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      postError: error,
    }),
  },
  initialState,
);

export default write;
