import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
`;

const WriteActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const WriteActionButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onPublish, onCanvasSave }) => {
  return (
    <WriteActionButtonsBlock>
      <WriteActionButtonsWrapper>
        <WriteActionButton onClick={onCanvasSave}>그림저장</WriteActionButton>
        <WriteActionButton cyan onClick={onPublish}>
          등록
        </WriteActionButton>
        <WriteActionButton gray>취소</WriteActionButton>
      </WriteActionButtonsWrapper>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
