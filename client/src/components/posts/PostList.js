import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFalse } from '../../modules/toggle';
import Responsive from '../common/Responsive';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

// 임시
const PostListWrapper = styled.div``;

const PostList = () => {
  const dispatch = useDispatch();

  const { toggle } = useSelector(({ toggle }) => ({
    toggle: toggle.toggle,
  }));

  const onToggleFalse = () => {
    if (toggle) dispatch(toggleFalse(false));
  };

  return <PostListBlock onClick={onToggleFalse}>postList</PostListBlock>;
};

export default PostList;
