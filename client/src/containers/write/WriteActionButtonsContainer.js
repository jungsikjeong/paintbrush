import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ onCanvasSave }) => {
  const dispatch = useDispatch();

  const { title, body, canvasData, isData } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    canvasData: write.canvasData.canvasData,
    isData: write.isData,
  }));

  const onPublish = () => {
    if (!isData) {
      alert('그림저장 버튼을 먼저 눌러주세요!');
      return;
    }

    dispatch(
      writePost({
        title,
        body,
        canvasData,
      }),
    );
  };

  // return <WriteActionButtons onCanvasSave={onCanvasSave} />;
  return (
    <WriteActionButtons onPublish={onPublish} onCanvasSave={onCanvasSave} />
  );
};

export default WriteActionButtonsContainer;
