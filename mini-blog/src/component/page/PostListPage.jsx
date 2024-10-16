import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PostListPage(props) {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]); //post목록 불러오기

  function handleList(e){
    fetch("http://localhost:8080/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log("게시글 목록:", json); // 응답 확인용 로그 추가
      setPostList(json);
    });
  }

  useEffect(()=>{
    handleList();
  },[])
// 1. 종속성배열생략 : 렌더링 할때마다 실행
// 2. 빈 종속성배열: 최초렌더링후 실행, 리렌더링 때 실행
// 3. 종속성배열에 변수있으면 변수가 수정될때마다 실행
  return (
    <div>
      <h1>PostList page</h1>
      <h2>게시글 목록</h2>
      <ul>
        {postList.map((item) => (
          <li key={item.no}>
            등록번호 : {item.no} <br />
            제목 : {item.postTitle} <br />
            내용 : {item.postContent}
          </li>
        ))}
      </ul>
        <button onClick={(e)=>{navigate("/")}}>메인 페이지</button>
    </div>
  );
}

export default PostListPage;
