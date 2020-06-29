import { createAction, handleActions } from 'redux-actions';

// 액션 생성
const TOGGLE_STATE = 'toggle/TOGGLE';
const TOGGLE_FALSE = 'toggle/TOGGLEFALSE';

// 액션 발생 함수
export const toggleState = createAction(TOGGLE_STATE);
export const toggleFalse = createAction(TOGGLE_FALSE);

const initialState = {
  toggle: '',
};

// 리듀서
export default handleActions(
  {
    [TOGGLE_STATE]: (state) => ({
      ...state,
      toggle: !state.toggle,
    }),
    [TOGGLE_FALSE]: (state) => ({
      ...state,
      toggle: false,
    }),
  },
  initialState,
);
