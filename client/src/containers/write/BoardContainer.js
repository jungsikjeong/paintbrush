import React from 'react';
import Board from '../../components/write/Board';
import { useDispatch } from 'react-redux';

const BoardContainer = () => {
  // 이곳에서 dispatch및 useSelector로 리덕스 작업하여 Board로
  // 넘길 예정
  const dispatch = useDispatch();

  const onCanvasData = () => {};

  return <Board />;
};

export default BoardContainer;
