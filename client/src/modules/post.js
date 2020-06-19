import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

const CANVASCOPY = 'post/CANVASCOPY';

const initialState = {
  canvas: null,
  error: null,
};

const post = handleActions({}, initialState);

export default post;
