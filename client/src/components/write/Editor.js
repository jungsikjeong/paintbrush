import React from 'react';
import styled from 'styled-components';
import WriteActionButtonsContainer from '../../containers/write/WriteActionButtonsContainer';

const EditorBlock = styled.div`
  display: flex;
  padding: 0rem 5rem;
`;

const EditorWrapper = styled.div`
  input {
    width: 30rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 15px;
    outline: none;
    border: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  textarea {
    resize: none;
    padding: 0.5rem;
    width: 30rem;
    height: 10rem;
    border-radius: 15px;
    border: none;
    outline: none;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

const Editor = ({ onChange, title, body, onCanvasSave }) => {
  return (
    <EditorBlock>
      <EditorWrapper>
        <form>
          <input
            name="title"
            placeholder="작품에 맞는 제목을 적어주세요!"
            onChange={onChange}
            value={title}
          />
          <textarea
            name="body"
            placeholder="당신의 작품을 소개해주세요!"
            onChange={onChange}
            value={body}
          />
        </form>
        <WriteActionButtonsContainer onCanvasSave={onCanvasSave} />
      </EditorWrapper>
    </EditorBlock>
  );
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
