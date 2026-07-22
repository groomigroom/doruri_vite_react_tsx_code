const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('3000번에 연결됨');
});

npm init -y로 package.json 기본 설정으로 만들기

npm install express --save 로 express 설치하기
--save는 package.json에 이 정보를 저장하겠다는 의미

로그인은 다봄


제시해주신 코드는 MySQL과의 연동 준비가 거의 다 되어 있는 훌륭한 백엔드 서버 코드입니다.
이 코드를 가지고 실제 데이터베이스(MySQL)와 정상적으로 연결하여 로그인과 회원가입 기능이 작동하게 만들려면 두 가지 사전 작업이 필요합니다.
------------------------------
## 1단계: 모듈 설치 및 설정 파일 생성하기
코드 상단에 선언된 require 파일들을 컴퓨터에 설치하고 환경을 맞춰주어야 합니다.

   1. 필수 패키지 설치
   프로젝트 터미널에 아래 명령어를 입력하여 필요한 모듈들을 설치합니다. (serve_static 오타는 자동으로 수정된 패키지명인 serve-static으로 설치합니다.)
   
   npm install express mysql serve-static
   
   2. dbconfig.json 파일 생성
   코드 5번째 줄에 있는 require('./config/dbconfig.json') 경로를 인식할 수 있도록, 프로젝트 폴더 내부에 config 폴더를 만들고 그 안에 dbconfig.json 파일을 만들어 아래 내용을 채워 넣습니다.
   
   {
       "host": "localhost",
       "user": "root",
       "password": "여러분의_MySQL_비밀번호",
       "database": "여러분들이_사용할_데이터베이스_이름"
   }
   
   
------------------------------
## 2단계: MySQL 데이터베이스 및 테이블 구조 만들기 (가장 중요)
Node.js 서버가 켜지더라도 MySQL 내부에 users라는 이름의 데이터베이스와 테이블이 없으면 쿼리 실행 실패 에러가 발생합니다. MySQL 워크벤치(Workbench)나 CLI 창을 켜고 아래 SQL 명령어를 한 줄씩 실행하여 데이터 테이블을 구축해야 합니다.

-- 1. 데이터베이스 생성 (json에 적은 이름과 동일해야 함)CREATE DATABASE 여러분들이_사용할_데이터베이스_이름;
-- 2. 생성한 데이터베이스 선택
USE 여러분들이_사용할_데이터베이스_이름;
-- 3. 코드 내부의 insert/select와 호환되는 users 테이블 생성CREATE TABLE users (
    id VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    age INT,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

------------------------------
## 🚨 코드 내부에서 여전히 유효한 에러 조치
지난번 수정에 이어, 새로 작성해주신 /process/login 라우터 내부에서도 동일한 에러 1곳이 그대로 발견되어 알려드립니다. 서버 크래시를 방지하기 위해 이 부분을 꼭 고쳐주셔야 합니다.

* 로그인 라우터 내부 수정 전:

pool.getConnection((err, conn) => {
    if (err) {
        conn.release(); // ❌ DB 연결이 실패(err)했다면 conn 객체가 없으므로 에러가 터집니다!
        // ... 생략

* 올바른 수정 후:

pool.getConnection((err, conn) => {
    if (err) {
        // conn.release(); 를 완전히 지워주셔야 에러 없이 안전하게 예외 처리가 됩니다.
        console.log('mysql getConnection error. aborted');
        // ... 생략

(마찬가지로 아래에 있는 /process/adduser 내부의 if (err) { conn.release(); } 부분도 conn.release();를 지워주세요.)

------------------------------
이렇게 세팅을 마치고 터미널에 node 파일명.js를 입력하면 "3000번 포트에서 듣기"라는 문구와 함께 MySQL과 정상적으로 통신할 준비가 끝납니다.
혹시 이 상태에서 프론트엔드 HTML 창(ID, Password 입력 폼)과 연결하여 테스트해 보고 싶으신가요? 입력 데이터를 전송할 HTML Form 태그 예시나 추가로 막히는 DB 에러 코드가 있다면 언제든 질문해 주세요!
