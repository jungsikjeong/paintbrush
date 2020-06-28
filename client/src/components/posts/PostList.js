import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleFalse } from '../../modules/toggle';

const PostListBlock = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PostList = () => {
  const dispatch = useDispatch();

  const onToggleFalse = () => {
    dispatch(toggleFalse(false));
  };

  return <PostListBlock onClick={onToggleFalse}>postList</PostListBlock>;
};

export default PostList;
