import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import JoinPage from './JoinPage';
import LoginPage from './LoginPage';
import Mainpage from './Mainpage';
import PostPage from './PostPage';
import PostListPage from './PostListPage';

function RouterPage(props) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/join' element={<JoinPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/post' element={<PostPage />} />
      <Route path='/postList' element={<PostListPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default RouterPage;