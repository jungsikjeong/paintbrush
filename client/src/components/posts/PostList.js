import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFalse } from '../../modules/toggle';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import SubInfo from '../common/SubInfo';

const PostListBlock = styled(Responsive)`
  /* background: #212529; */
`;

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  .imgBox {
    width: 17rem;
    background-color: white;
    margin-top: 0.6rem;
    border-radius: 10px;
    img {
      width: 17rem;
      border-radius: 10px;
      /* 사진에 조명 효과 */
      box-shadow: 0px 0px 18px #212529;
      overflow: hidden;
    }
  }
`;

const SLink = styled(Link)`
  font-size: 2rem;
`;

const StyledButton = styled(Button)``;

const PostItem = ({ post }) => {
  const { title, body, user, canvasData, publishedDate, _id } = post;

  return (
    <PostItemBlock>
      <SLink to={`/@${user.name}/${_id}`}>{title}</SLink>
      <div className="imgBox">
        <img src={canvasData} />
        {/* {body} */}
      </div>
      {/* <SubInfo username={user.name} publishedDate={new Date(publishedDate)} /> */}
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
      {/* 로딩 중이 아니고, 포스트 배열이 존재 할 때만 보여줌  */}
      {!loading && posts && (
        <PostListWrapper>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </PostListWrapper>
      )}
    </PostListBlock>
  );
};

export default PostList;
