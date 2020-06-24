import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DrawingPage from '../pages/DrawingPage';
import PostListPage from '../pages/PostListPage';
import WritePage from '../pages/WritePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path={'/'} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={PostListPage} path={['/@:name', '/postList']} exact />
      <Route component={DrawingPage} path={'/paint'} />
      <Route component={WritePage} path={'/write'} />
    </>
  );
};

export default App;
