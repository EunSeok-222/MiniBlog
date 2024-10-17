import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PostListPage(props) {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]); //3 json형식의 post목록 postList저장
  const [postDetail, setPostDetail] = useState([]); //post 1개 목록 불러오기

  function handleList(e) {
    fetch("http://localhost:8080/posts")   //2 url 목록 불러오기
      .then((response) => response.json())
      .then((json) => {
        console.log("게시글 목록:", json); // 응답 확인용 로그 추가
        setPostList(json);
      });
  }

  function fetchOne(no) {
    fetch(`http://localhost:8080/posts/${no}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("no 게시글 :", json); // 응답 확인용 로그 추가
        setPostDetail(json);
      });
  }
  useEffect(() => {   //  1 handleList();를 실행기킴
    handleList();
  }, []);
  // 1. 종속성배열생략 : 렌더링 할때마다 실행
  // 2. 빈 종속성배열: 최초렌더링후 실행, 리렌더링 때 실행
  // 3. 종속성배열에 변수있으면 변수가 수정될때마다 실행
  return (
    <div>
      <h1>PostList page</h1>
      <h2>게시글 목록</h2>
      <table>
        <thead>
          <tr>
            <th>등록순서</th>
            <th>제목 </th>
          </tr>
        </thead>
        <tbody>
          {postList.map((item) => ( //4 postList에 정보를 item이라하고
            <tr key={item.no}>
              <td><a href="#" onClick={(e)=>{e.preventDefault();navigate(`/postDetail/${item.no}`)}}>{item.no}</a></td>
              <td><a href="#" onClick={(e)=>{e.preventDefault();fetchOne(item.no)}}>{item.postTitle}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>상세보기</h3>
        <p>제목 : {postDetail.postTitle}</p>
        <p>내용 : {postDetail.postContent}</p>
      </div>
      <button onClick={(e) => {navigate("/");}}>메인 페이지</button>
    </div>
  );
}

export default PostListPage;
