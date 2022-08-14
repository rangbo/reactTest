import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  let [글제목, 글제목변경] = useState(['웅니 코트 추천', '하이루', 'ㅇㅇㅇㅇㅇㅇ']);
  let [따봉, 따봉변경] = useState(0);

  // function 버튼변경 (){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자코트 추천';
  //   글제목변경(newArray);
  // }

  let posts = '강남 고기 맛집' ;
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>🥰</span> { 따봉 } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}


export default App;
