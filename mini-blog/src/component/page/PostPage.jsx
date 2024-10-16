import React from "react";
import { useNavigate } from "react-router-dom";

function PostPage(props) {
  const navigate = useNavigate();

  function handleCreateClick(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("data = ", data);

    //글 등록
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log("등록 data : ", json));
      e.target.reset(); // 폼의 모든 입력값 초기화

  }

  function handleSubmit(e){
    e.preventDefault() //새로고침 방지
    handleCreateClick(e)
  }
  return (
    <div>
      <h1>post page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          포스팅 제목 : <br />
          <input name="postTitle" type="text" required />
        </label>
        <br />
        <label>
          포스팅 내용 : <br />
          <textarea name="postContent" required />
        </label>
        <br />
      <input type="submit" value="등록하기" />
      </form>
      <button onClick={(e)=>{navigate("/")}}>메인 페이지</button>
    </div>

  );
}

export default PostPage;
