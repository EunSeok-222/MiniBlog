import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "bootstrap";
function JoinPage(props) {
  const [dataList, setDataList] = useState([]);

  function handleCreateClick(e) {
    let ff = e.target
    const formData = new FormData(e.target);
    
    const data = Object.fromEntries(formData.entries()); //<form>에 현재 입력된 값 추출하여 객체에 저장
    console.log("data = ", data);
    ff.userId.value = "" //입력값 삭제
    ff.pwd.value = ""
    ff.userName.value ="" 


    fetch('http://localhost:8080/joins', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log("가입 data : ", json));
  }

  function handleListClick(e){
  fetch('http://localhost:8080/joins')
  .then((response) => response.json())
  .then((json) => {
    console.log("불러온 data:", json); // 응답 확인용 로그 추가 
    setDataList(json)
  });  
}    

  function handleSubmit(e){
    e.preventDefault()
    handleCreateClick(e)
  }
  return (
    <div>
      <h1>가입하기</h1>
      <form onSubmit={handleSubmit}>
        <label>
          회원 ID : <input name="userId"></input>
        </label><br />
        <label>
          비밀번호 : <input type="password" name="pwd"></input>
        </label><br />
        <label>
          이름 : <input name="userName"></input>
        </label><br />
      <input type="submit" value="가입하기"></input>
      </form>
      <button onClick={handleListClick}>목록</button>
      <dir>
      <h2>가입자 목록</h2>
        <ul>
          {dataList.map((item) => (
            <li key={item.no}>
              ID: {item.userId}, 이름: {item.userName}
            </li>
          ))}
        </ul>
      </dir>
    </div>
  );
}

export default JoinPage;
