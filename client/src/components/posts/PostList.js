import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toggleFalse } from '../../modules/toggle';
import './postList.css';

const PostListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

// const PostListWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(30%, auto));
// `;

const SLink = styled(Link)``;

const PostItem = ({ post }) => {
  const { user, canvasData, _id } = post;

  return (
    <SLink to={`/@${user.name}/${_id}`}>
      <img src={canvasData} alt="views" />
    </SLink>
  );
};

const PostList = ({ posts, error, loading, onToggleFalse }) => {
  // 에러 발생시
  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1rem',
          color: 'red',
        }}
      >
        에러가 발생하였습니다.
      </div>
    );
  }
  return (
    <PostListContainer onClick={onToggleFalse}>
      {/* 로딩 중이 아니고, 포스트 배열이 존재 할 때만 보여줌  */}
      {!loading && posts && (
        <div className="itemContainer">
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListContainer>
  );
};

export default PostList;
