import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function JoinPage(props) {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);//가입 정보 목록 불러오기

  function handleCreateClick(e) {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); //<form>에 현재 입력된 값 추출하여 객체에 저장
    console.log("data = ", data);
    
    //가입등록
    fetch('http://localhost:8080/joins', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log("가입 data : ", json));

      e.target.reset(); // 폼의 모든 입력값 초기화
  }
//가입 정보 목록 불러오기
  function handleListClick(e){
  fetch('http://localhost:8080/joins')
  .then((response) => response.json())
  .then((json) => {
    console.log("불러온 data:", json); // 응답 확인용 로그 추가 
    setDataList(json)
  });  
}    

  function handleSubmit(e){
    e.preventDefault() //새로고침 방지
    handleCreateClick(e)
  }
  return (
    <div>
      <h1>가입하기</h1>
      <form onSubmit={handleSubmit}>
        <label>
          회원 ID : <input name="userId"required></input>
        </label><br />
        <label>
          비밀번호 : <input type="password" name="pwd"required></input>
        </label><br />
        <label>
          이름 : <input name="userName"required></input>
        </label><br />
      <input type="submit" value="가입하기"></input>
      </form>
      <button onClick={handleListClick}>목록</button>
      <div>
      <h2>가입자 목록</h2>
        <ul>
          {dataList.map((item) => (
            <li key={item.no}>
              고유번호: {item.no},ID: {item.userId}, 이름: {item.userName}, pwd: {item.pwd}
            </li>
          ))}
        </ul>
        <button onClick={(e)=> {navigate("/")}}>메인 페이지</button>
      </div>
    </div>
  );
}

export default JoinPage;
