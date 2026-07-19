터미널에 npm init -y

npm install express --save








function showLogMessage (msg) {
    console.log('------------------');
    console.log(`로그 메시지는 : ${msg}`);
    console.log('------------------');
};

module.exports.showLogMessage = showLogMessage

// main.js (불러오는 파일)

// 1. require()를 사용해 파일 경로를 지정하여 모듈을 가져옵니다.
// (동일 폴더에 있다면 파일명 앞에 ./ 를 반드시 붙여야 합니다. .js 확장자는 생략 가능)
const logger = require('./logger'); 

// 2. 모듈 변수명 뒤에 마침표(.)를 찍고 함수를 호출합니다.
logger.showLogMessage('안녕하세요! 모듈 테스트 중입니다.');
코드를 사용할 때는 주의가 필요합니다.방법 2: 구조 분해 할당(Destructuring)으로 함수만 쏙 빼서 사용하기 (추천)모듈 안에 여러 함수가 있을 때, 내가 필요한 특정 함수(showLogMessage)만 변수로 직접 뽑아내어 간결하게 사용하는 방식입니다.javascript// main.js (불러오는 파일)

// 중괄호 { } 를 사용하여 모듈 내부의 특정 함수 이름만 지정해 가져옵니다.
const { showLogMessage } = require('./logger');

// 모듈 이름 없이 함수명만 가지고 바로 사용할 수 있어 코드가 깔끔해집니다.
showLogMessage('반갑습니다! 두 번째 방법입니다.');
