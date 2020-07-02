import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ onCanvasSave }) => {
  const dispatch = useDispatch();

  const { title, body, canvasData } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    canvasData: write.canvasData.canvasData,
  }));

  const onPublish = () => {
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
