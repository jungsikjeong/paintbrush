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

const Editor = () => {
  return <EditorBlock></EditorBlock>;
};

export default Editor;

// return (
//   <EditorBlock>
//     <img ref={image} />
//     <Canvas ref={canvas} width={CANVAS_SIZE} height={CANVAS_SIZE}></Canvas>
//   </EditorBlock>
// );

//   const callCanvasImage = () => {
//     const image = new Image(); // 이미지 객체 생성
//     image.onload = () => {
//       // 이미지가 로드되면 실행..
//       ctx.current.drawImage(image, 0, 0); //복사할 캔버스의 컨텍스트를 가져와 drawImage를 호출해 다시 그려준다.
//     };
//     image.src = copyCanvas;
//   };
