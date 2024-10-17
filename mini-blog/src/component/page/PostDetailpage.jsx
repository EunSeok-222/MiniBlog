import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PostDetailpage(props) {
  const navigate = useNavigate();
  const {no} = useParams();// %% URL에서 글 번호(no)를 가져옴 %%
  const [postDetail, setPostDetail] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:8080/posts/${no}`)
    .then((response) => response.json())
    .then((json) => {
      console.log("no 내용 :", json);
      setPostDetail(json);
    });
  },[no])



  return (
    <div>
      <h1>PostDetailpage</h1>
      <p>글 번호: {no}</p> 
      <p>제목: {postDetail.postTitle}</p>
      <p>내용: {postDetail.postContent}</p>
    
    <button onClick={(e)=>{navigate("/postList")} }>게시글 목록</button>
    </div>
  );
}

export default PostDetailpage;