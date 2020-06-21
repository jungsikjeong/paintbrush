import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DrawingPage from '../pages/DrawingPage';
import PostListPage from '../pages/PostListPage';
import WritePage from '../pages/WritePage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path={'/'} exact />
      <Route component={PostListPage} path={['/@:name', '/postList']} exact />
      <Route component={DrawingPage} path={'/paint'} />
      <Route component={WritePage} path={'/write'} />
    </>
  );
};

export default App;
