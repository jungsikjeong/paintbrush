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
  const [filling, setFilling] = useState(false);
  const [color, setColor] = useState('#2c2c2c');

  const CANVAS_SIZE = 700;

  let painting = false;
  let ctx;

  const canvasRef = useRef(null);

  const startPainting = () => {
    painting = true;
  };

  const stopPainting = () => {
    painting = false;
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!painting) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      console.log(painting);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
      console.log(painting);
    }
  };

  const handleColorClick = (e) => {
    setColor(e.target.style.backgroundColor);
    console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  };

  const handleRangeChange = (e) => {
    const size = event.target.value;
    ctx.lineWidth = size;
  };

  // true면 fill, false면 paint
  const handleModeClick = () => {
    setFilling(!filling);
  };

  const handleCanvasClick = () => {
    if (filling) {
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  };

  useEffect(() => {
    // ...drawing using the ctx
    ctx = canvasRef.current.getContext('2d');

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.5;
  }, [canvasRef]);

  return (
    <>
      <Canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onMouseMove={onMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        handleCanvasClick={handleCanvasClick}
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
        <BoardButton handleModeClick={handleModeClick} filling={filling} />
        <Colors handleColorClick={handleColorClick} />
      </Controls>
    </>
  );
};

export default Board;
