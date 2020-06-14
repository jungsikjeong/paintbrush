import React, { useState, useEffect } from 'react';
import Board from '../../components/common/Board';

const BoardContainer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  let painting = false; // 마우스를 클릭했을때 true, 마우스를 뗏을때 false

  const stopPainting = () => {
    painting = false;
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;
  };

  const onMouseDown = ({ nativeEvent }) => {
    painting = true;
  };

  const onMouseUp = ({ nativeEvent }) => {
    stopPainting();
  };

  return (
    <Board
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      stopPainting={stopPainting}
      onMouseUp={onMouseUp}
      position={position}
    />
  );
};

export default BoardContainer;
