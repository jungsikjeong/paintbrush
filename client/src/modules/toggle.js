import { createAction, handleActions } from 'redux-actions';

// 액션 생성
const TOGGLESTATE = 'toggle/TOGGLE';
const TOGGLEFALSE = 'toggle/TOGGLEFALSE';

// 액션 발생 함수
export const toggleState = createAction(TOGGLESTATE);
export const toggleFalse = createAction(TOGGLEFALSE);

const initialState = {
  toggle: '',
};

// 리듀서
export default handleActions(
  {
    [TOGGLESTATE]: (state, { payload: toggle }) => ({
      ...state,
      toggle: !state.toggle,
    }),
    [TOGGLEFALSE]: (state, { payload: toggleFalse }) => ({
      ...state,
      toggle: toggleFalse,
    }),
  },
  initialState,
);
