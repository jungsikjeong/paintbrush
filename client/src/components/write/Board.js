import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from '../common/Colors';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { canvasData } from '../../modules/write';
import BoardToolbarContainer from '../../containers/write/BoardToolbarContainer';
import EditorContainer from '../../containers/write/EditorContainer';

const CanvasBlock = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 50px 0px;
  background-color: #f6f9fc;
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
  padding: 1rem;

  .controls__range {
    margin-bottom: 30px;
  }

  .controls__colors {
    display: flex;

    .controls__colors__one {
    }

    .controls__color {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      margin: 0.2rem;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);

      /* 클릭했을때 */
      :active {
        border-color: #4195fc;
        box-shadow: 0px 0px 15px #4195fc;
      }
    }
  }
`;

const SLink = styled(Link)``;

const Board = () => {
  const [filling, setFilling] = useState(false);
  const [canvasRemove, setCanvasRemove] = useState(false);
  const [color, setColor] = useState('#2c2c2c');
  const dispatch = useDispatch();

  const { canvasCopy } = useSelector(({ write }) => ({
    canvasCopy: write.canvasCopy,
  }));

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
    if (canvasRemove) setCanvasRemove(false); // 지우개모드이면 지우개모드를 끔
    setFilling(!filling);
  };

  const onCanvasClick = () => {
    if (canvasRemove) return; // 지우개 모드면 아무것도 실행안함
    if (filling) {
      ctx.current.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
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
  };

  const onCanvasSave = () => {
    const imageData = canvas.current.toDataURL();
    dispatch(canvasData(imageData));
    console.log('그림저장:', canvasData);
  };

  // const onCanvasSave = () => {
  //   const imageData = canvas.current.toDataURL();

  //   const blobBin = atob(imageData.split(',')[1]); // base64 데이터 디코딩
  //   let array = [];

  //   for (let i = 0; i < blobBin.length; i++) {
  //     array.push(blobBin.charCodeAt(i));
  //   }
  //   const file = new Blob([new Uint8Array(array)], { type: 'image/png' }); // Blob 생성
  //   const formData = new FormData(); // formData 생성
  //   formData.append('file', file); // file data 추가

  //   dispatch(canvasData(formData));
  //   console.log(formData);
  // };

  // const onCanvasSave = () => {
  //   const Data = canvas.current.toDataURL();
  //   const imageObj = new Image();

  //   imageObj.onload = function () {
  //     context.current.drawImage(imageObj, CANVAS_SIZE, CANVAS_SIZE);
  //   };
  //   imageObj.src = Data;
  // };

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
          <BoardToolbarContainer
            onModeClick={onModeClick}
            filling={filling}
            onRemoveModeClick={onRemoveModeClick}
          />
          <Colors onColorClick={onColorClick} />
        </Controls>
        <EditorContainer onCanvasSave={onCanvasSave} />
      </CanvasBlock>
    </>
  );
};

export default Board;
