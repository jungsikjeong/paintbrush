import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import { Link } from 'react-router-dom';
import BoardButton from './BoardButton';

const CanvasBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
`;

const Canvas = styled.canvas`
  width: 700px;
  height: 700px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

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

const SLink = styled(Link)``;

const Board = () => {
  const [filling, setFilling] = useState(false);
  const [color, setColor] = useState('#2c2c2c');

  const CANVAS_SIZE = 700;

  let painting = false;

  const canvas = useRef(null);
  const ctx = useRef(null);

  const CopyCanvas = useRef(null);
  const CopyCtx = useRef(null);

  const startPainting = () => {
    painting = true;
  };

  const stopPainting = () => {
    painting = false;
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;
    if (!ctx.current) return;

    if (!painting) {
      ctx.current.beginPath();
      ctx.current.moveTo(x, y);
    } else {
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
    }
  };

  const handleColorClick = (e) => {
    setColor(e.target.style.backgroundColor);

    ctx.current.strokeStyle = e.target.style.backgroundColor;
    ctx.current.fillStyle = e.target.style.backgroundColor;
  };

  const handleRangeChange = (e) => {
    const size = e.target.value;
    ctx.current.lineWidth = size;
  };

  // true면 fill, false면 paint
  const handleModeClick = () => {
    setFilling(!filling);
  };

  const handleCanvasClick = () => {
    if (filling) {
      ctx.current.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  };

  const keydownHandler = () => {
    ctx.current.restore();
  };

  const onContextMenu = (e) => {
    e.preventDefault();
  };

  const handleSaveClick = () => {
    const imageData = canvas.current.toDataURL();
    const image = new Image(); // 이미지 객체 생성
    image.onload = () => {
      // 이미지가 로드되면 작동
      // ctx.current.drawImage(image, 0, 0); //복사할 캔버스의 컨텍스트를 가져와 drawImage를 호출해 다시 그려준다.
      image.src = imageData;
    };
    console.log(image.src);
    // const image = canvas.current.toDataURL();
    // SLink.href = image;
    // SLink.download = 'PaintJs[EXPORT]🎨';
    // // console.log(SLink);
    // SLink.click();
  };

  useEffect(() => {
    // ...drawing using the ctx
    if (canvas.current) {
      ctx.current = canvas.current.getContext('2d');
      ctx.current.fillStyle = 'white';
      ctx.current.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      ctx.current.strokeStyle = color;
      ctx.current.lineWidth = 2.5;
    }
  }, []);

  return (
    <>
      <CanvasBlock>
        <Canvas
          ref={canvas}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          onMouseMove={onMouseMove}
          onMouseDown={startPainting}
          onMouseUp={stopPainting}
          onMouseLeave={stopPainting}
          onClick={handleCanvasClick}
          onContextMenu={onContextMenu}
        ></Canvas>
      </CanvasBlock>
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
        <BoardButton
          handleModeClick={handleModeClick}
          filling={filling}
          handleSaveClick={handleSaveClick}
        />
        <Colors handleColorClick={handleColorClick} />
      </Controls>
    </>
  );
};

export default Board;
