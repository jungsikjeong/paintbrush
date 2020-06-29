import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from './Colors';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { canvasCopy } from '../../modules/canvas';
import BoardButtonContainer from '../../containers/boardButton/BoardButtonContainer';

const CanvasBlock = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 50px 0px;
`;

const Canvas = styled.canvas`
  margin-left: 2.5rem;
  width: 700px;
  height: 700px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  /* cursor: url(https://cur.cursors-4u.net/others/oth-2/oth198.cur) 39 39, auto !important; */
`;

const Controls = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* padding-bottom: 50px; */
  padding: 1rem;

  .controls__range {
    margin-bottom: 30px;
  }

  .controls__colors {
    display: flex;

    .controls__colors__one {
      /* display: flex; */
      /* flex-direction: column; */
    }

    .controls__color {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      margin: 0.2rem;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }
`;

const SLink = styled(Link)``;

const Board = () => {
  const [filling, setFilling] = useState(false);
  const [canvasRemove, setCanvasRemove] = useState(false);
  const [color, setColor] = useState('#2c2c2c');
  const dispatch = useDispatch();

  const CANVAS_SIZE = 700;

  let painting = false;
  let removeIng = false;

  const canvas = useRef(null);
  const ctx = useRef(null);

  const startPainting = () => {
    painting = true;
    removeIng = true;
  };

  const stopPainting = () => {
    painting = false;
    removeIng = false;
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;
    if (!ctx.current) return;

    if (!painting) {
      ctx.current.beginPath();
      ctx.current.moveTo(x, y);
    } else if (painting && !canvasRemove) {
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
    }
    if (canvasRemove && removeIng) {
      onRemoveCanvas(x, y);
    }
  };

  const onColorClick = (e) => {
    setColor(e.target.style.backgroundColor);

    ctx.current.strokeStyle = e.target.style.backgroundColor;
    ctx.current.fillStyle = e.target.style.backgroundColor;
  };

  const onRangeChange = (e) => {
    const size = e.target.value;
    ctx.current.lineWidth = size;
  };

  // true면 fill, false면 paint
  const onModeClick = () => {
    setFilling(!filling);
  };

  const onCanvasClick = () => {
    if (filling) {
      ctx.current.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  };

  const onContextMenu = (e) => {
    e.preventDefault();
  };

  const onSaveClick = () => {
    const imageData = canvas.current.toDataURL();
    dispatch(canvasCopy(imageData));
  };

  // 지우개
  const onRemoveCanvas = (x, y) => {
    const lineWidth = ctx.current.lineWidth + 5;
    ctx.current.clearRect(
      x - lineWidth / 2,
      y - lineWidth / 2,
      lineWidth,
      lineWidth,
    );
  };
  // 지우개 모드로전환 or 지우개모드 끄기
  const onRemoveModeClick = () => {
    setCanvasRemove(!canvasRemove);
    painting = false;
    console.log(canvasRemove);
  };

  useEffect(() => {
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
          onClick={onCanvasClick}
          onContextMenu={onContextMenu}
        ></Canvas>

        <Controls>
          <div className="controls__range">
            <input
              type="range"
              min="0.1"
              max="5"
              defaultValue={'2.5'}
              onChange={onRangeChange}
              step="0.1"
            />
          </div>
          <BoardButtonContainer
            onModeClick={onModeClick}
            filling={filling}
            onSaveClick={onSaveClick}
          />
          <Colors onColorClick={onColorClick} />
        </Controls>
      </CanvasBlock>
    </>
  );
};

export default Board;
