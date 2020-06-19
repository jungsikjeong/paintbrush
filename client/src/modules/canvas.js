import { createAction, handleActions } from 'redux-actions';
// import { takeLatest } from 'redux-saga/effects';

export const INITIALIZE = 'canvas/INITIALIZE'; // 모든 내용 초기화

const CANVAS_COPY = 'canvas/CANVAS_COPY';
// const CANVAS_COPY_SUCCESS = 'canvas/CANVAS_COPY_SUCCESS';
// const CANVAS_COPY_FAILURE = 'canvas/CANVAS_COPY_FAILURE';

export const canvasCopy = createAction(CANVAS_COPY, ({ copyCanvas }) => ({
  copyCanvas,
}));

const initialState = {
  copyCanvas: null,
  error: null,
};

const canvas = handleActions(
  {
    [INITIALIZE]: (state) => ({
      initialState,
    }),
    [CANVAS_COPY]: (state, { payload: copyCanvas }) => ({
      ...state,
      copyCanvas,
    }),
  },
  initialState,
);

export default canvas;
