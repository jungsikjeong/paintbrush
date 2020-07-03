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
  background: black;
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
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-top: 0.6rem;
    /* box-shadow: 0px 0px 18px #fff; */
    img {
      width: 17rem;
      /* 사진에 조명 효과 */
      box-shadow: 0px 0px 18px #fff;
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
