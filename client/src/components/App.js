import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostListPage from '../pages/PostListPage';
import WritePage from '../pages/WritePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PostPage from '../pages/PostPage';

const App = () => {
  return (
    <div style={{ background: '#000' }}>
      <Route component={HomePage} path={'/'} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={PostListPage} path={['/@:name', '/postList']} exact />
      <Route component={WritePage} path={'/write'} />
      <Route component={PostPage} path={'/@:name/:postId'} />
    </div>
  );
};

export default App;
