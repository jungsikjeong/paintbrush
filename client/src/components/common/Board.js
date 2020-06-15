import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Colors from './Colors';

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

  .controls__btns {
    margin-bottom: 30px;
    button {
      all: unset;
      cursor: pointer;
      background-color: white;
      padding: 5px 0px;
      width: 80px;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
      border: 2px solid rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.7);
      text-transform: uppercase;
      font-weight: 800;
      font-size: 12px;
    }
    button:active {
      transform: scale(0.98);
    }
  }
`;

const Board = () => {
  let painting = false; // 마우스를 클릭했을때 true, 마우스를 뗏을때 false
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
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  const handleColorClick = (e) => {
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
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
          {/* <input
            type="range"
            id="jsRange"
            min="0.1"
            max="5"
            value="2.5"
            step="0.1"
          /> */}
        </div>
        <div className="controls__btns">
          <button id="jsMode">Fill</button>
          <button id="jsSave">Save</button>
        </div>
        <Colors handleColorClick={handleColorClick} />
      </Controls>
    </>
  );
};

export default Board;
