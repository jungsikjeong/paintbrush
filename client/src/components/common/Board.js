import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import BoardButton from './BoardButton';

const Canvas = styled.canvas`
  width: 700px;
  height: 700px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Controls = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .controls__range {
    margin-bottom: 30px;
  }

  .controls__colors {
    display: flex;
    .controls__color {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }
`;

const Board = () => {
  const [painting, setPainting] = useState(false); // 마우스를 클릭했을때 true, 마우스를 뗏을때 false
  let ctx;

  const canvasRef = useRef(null);

  const startPainting = () => {
    setPainting(true);
  };

  const stopPainting = () => {
    setPainting(false);
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!painting) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const handleColorClick = (e) => {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
  };

  const handleRangeChange = (e) => {
    const size = event.target.value;
    ctx.lineWidth = size;
  };

  useEffect(() => {
    // ...drawing using the ctx
    ctx = canvasRef.current.getContext('2d');

    ctx.strokeStyle = '#2c2c2c';
    ctx.lineWidth = 2.5;
  }, [canvasRef]);

  return (
    <>
      <Canvas
        ref={canvasRef}
        width={700}
        height={700}
        onMouseMove={onMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
      ></Canvas>
      <Controls>
        <div className="controls__range">
          <input
            type="range"
            min="0.1"
            max="5"
            defaultValue={'2.5'}
            onChange={handleRangeChange}
            step="0.1"
          />
        </div>
        <BoardButton />
        <Colors handleColorClick={handleColorClick} />
      </Controls>
    </>
  );
};

export default Board;
