import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';

const EditorBlock = styled.div`
  /* 임시 css */
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

const Editor = () => {
  const [ctx, setCtx] = useState(null);
  const canvas = useRef(null);
  const image = useRef(null);

  const { copyCanvas } = useSelector(({ canvas }) => ({
    copyCanvas: canvas.copyCanvas,
  }));
  const imageData = copyCanvas;
  const CANVAS_SIZE = 700;

  useEffect(() => {
    if (canvas.current) {
      setCtx(canvas.current.getContext('2d'));
    }
  }, [canvas]);

  useEffect(() => {
    if (ctx) {
      image.current.onload = function () {
        ctx.drawImage(image.current, 0, 0);
      };
      image.current.src = imageData;
    }
  }, [ctx]);

  return (
    <EditorBlock>
      <img ref={image} />
      <Canvas ref={canvas} width={CANVAS_SIZE} height={CANVAS_SIZE}></Canvas>
    </EditorBlock>
  );
};

export default Editor;

//   const callCanvasImage = () => {
//     const image = new Image(); // 이미지 객체 생성
//     image.onload = () => {
//       // 이미지가 로드되면 실행..
//       ctx.current.drawImage(image, 0, 0); //복사할 캔버스의 컨텍스트를 가져와 drawImage를 호출해 다시 그려준다.
//     };
//     image.src = copyCanvas;
//   };
