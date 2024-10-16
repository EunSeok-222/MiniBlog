import React from 'react';
import { useNavigate } from 'react-router-dom';


function Mainpage(props) {

  const navigate = useNavigate();

  return (
    <div>
      <h1>main page</h1>
      <button onClick={(e)=>{navigate('/join')}}>가입하기</button>
      <button onClick={(e)=>{navigate('/login')}}>로그인</button>
      <button onClick={(e)=>{navigate('/post')}}>게시글 작성</button>
      <button onClick={(e)=>{navigate('/postList')}}>게시글 목록</button>
    </div>
  );
}

export default Mainpage;