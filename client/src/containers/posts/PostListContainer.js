import React, { useEffect } from 'react';
import qs from 'qs';
import PostList from '../../components/posts/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listPosts } from '../../modules/posts';

const PostListContainer = ({ location, match }) => {
  const dispatch = useDispatch();

  // user UI 창 열기 or 닫기
  const { toggle, posts, error, loading } = useSelector(
    ({ toggle, posts, loading, user }) => ({
      toggle: toggle.toggle,
      posts: posts.posts,
      error: posts.error,
      user: user.user,
      loading: loading['posts/LIST_POSTS'],
    }),
  );

  // user UI 창이 열려있으면 닫는기능
  const onToggleFalse = () => {
    if (toggle) dispatch(toggleFalse(false));
  };

  useEffect(() => {
    const { name, title, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ name, page }));
    console.log(dispatch(listPosts({ name, page })));
  }, [dispatch, location.search]);

  return (
    <PostList
      onClick={onToggleFalse}
      posts={posts}
      error={error}
      loading={loading}
    />
  );
};

export default withRouter(PostListContainer);
