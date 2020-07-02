import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFalse } from '../../modules/toggle';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const PostListWrapper = styled.div``;

const PostItemBlock = styled.div`
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
`;

const StyledButton = styled(Button)``;

const PostItem = ({ post }) => {
  useEffect(() => {
    console.log('post:', post);
  });
  const { title, body, user, canvasData, publishedDate, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.name}/${_id}`}>{title}</Link>
      </h2>
      <img src={canvasData} />
      <SubInfo username={user.name} publishedDate={new Date(publishedDate)} />
    </PostItemBlock>
  );
};

const PostList = ({ posts, error, loading, onToggleFalse }) => {
  // 에러 발생시
  if (error) {
    return (
      <PostListBlock onClick={onToggleFalse}>
        에러가 발생하였습니다.
      </PostListBlock>
    );
  }

  return (
    <PostListBlock onClick={onToggleFalse}>
      <PostListWrapper>
        {/* 로딩 중이 아니고, 포스트 배열이 존재 할 때만 보여줌  */}
        {!loading && posts && (
          <div>
            {posts.map((post) => (
              <PostItem post={post} key={post._id} />
            ))}
          </div>
        )}
      </PostListWrapper>
    </PostListBlock>
  );
};

export default PostList;
