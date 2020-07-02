import React, { useCallback, useEffect } from 'react';
import Editor from '../../components/write/Editor';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../modules/write';

const EditorContainer = ({ onCanvasSave }) => {
  const dispatch = useDispatch();

  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Editor
      onChange={onChange}
      title={title}
      body={body}
      onCanvasSave={onCanvasSave}
    />
  );
};

export default EditorContainer;
