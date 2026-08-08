import { useState } from "react";

function App() {
  // 1. 상태를 단순 문자열(string) 타입으로 변경하고 초기값을 빈 문자열("")로 설정합니다.
  const [str, setStr] = useState<string>("");

  // 2. 인풋창에 글자를 타이핑할 때마다 str 상태를 업데이트해 주는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStr(e.target.value);
  };

  // 3. 정답 배열을 만들고, 인풋에 입력된 글자와 하나씩 비교하여 맞춘 개수 계산
  // (index 에러 없이 안전하게 글자 수를 셀 수 있습니다)
  const target = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const count = target.filter((char, index) => str[index] === char).length;

  let last_str: string = "";

  if (str.length === 8) {
    last_str = '맟춘 개수: ' + count + '개';
  }
  else {
    last_str = '글자 수가 8글자가 아닙니다.';
  }

  return (
    <div>
      <form className="txt_form" onSubmit={(e) => e.preventDefault()}>
        {/* 4. value와 함께 onChange 이벤트를 반드시 연결해 주어야 타이핑이 됩니다 */}
        <input
          type="text"
          name="txt_one"
          value={str}
          onChange={handleInputChange}
        />
        <p>{last_str}</p>
      </form>
    </div>
  );
}

export default App;

끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝끝



## 4. 이벤트 핸들러 및 타입 지정

## 5. 배열 메서드 및 연산 (비즈니스 로직)

const target = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const count = target.filter((char, index) => str[index] === char).length;


* const target: 비교 대상인 정답 글자들이 담긴 문자열 배열입니다.
* target.filter(...): 배열의 각 요소를 순회하며 조건에 맞는 요소만 추려내어 새로운 배열을 만드는 자바스크립트 내장 메서드입니다.
* (char, index) => ...: filter 메서드 내부의 콜백 함수입니다.
* char: 현재 순회 중인 글자 (예: 'a', 'b' 등)
   * index: 현재 글자의 배열 순번 (0부터 시작)
* str[index] === char: 사용자가 입력한 문자열 str의 해당 위치(index)에 있는 글자가 정답 글자(char)와 일치하는지 비교합니다.
* .length: 필터를 거쳐 매칭된 글자들만 모인 배열의 총 개수(길이)를 가져옵니다.

------------------------------
## 6. 조건문 및 변수 타입 지정

let last_str: string = "";
if (str.length === 8) {
  last_str = '맟춘 개수: ' + count + '개';
}else {
  last_str = '글자 수가 8글자가 아닙니다.';
}


* let last_str: string = "": 값을 변경할 수 있는 변수 last_str을 선언하고, 타입을 string으로 지정한 후 빈 문자열로 초기화합니다.
* str.length === 8: 사용자가 입력한 글자 수가 정확히 8글자인지 비교 연산자(===)로 검사합니다.
* 조건문 결과 분기: 8글자이면 맞춘 개수를 포함한 문자열을, 아니면 경고 메시지를 last_str 변수에 할당합니다.

------------------------------
## 7. JSX/TSX 반환 및 이벤트 차단

return (
  <div>
    <form className="txt_form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="txt_one"
        value={str}
        onChange={handleInputChange}
      />
      <p>{last_str}</p>
    </form>
  </div>
);


* return ( ... ): 컴포넌트가 화면에 렌더링할 HTML 형태의 UI 구조를 반환합니다.
* JSX/TSX 문법: 자바스크립트 코드 내에서 HTML 태그를 직관적으로 작성할 수 있게 해주는 문법입니다.
* className="txt_form": HTML의 class 속성 대신 React에서는 자바스크립트 예약어와의 충돌을 피하기 위해 className을 사용합니다.
* onSubmit={(e) => e.preventDefault()}: 폼 내부에서 엔터를 누르거나 제출할 때 페이지가 새로고침되는 브라우저의 기본 동작(preventDefault())을 막아줍니다.
* value={str} & onChange={handleInputChange}: 제어 컴포넌트(Controlled Component) 패턴입니다. 인풋의 값(value)을 React 상태(str)와 동기화하고, 값이 바뀔 때마다 상태를 업데이트합니다.
* {last_str}: JSX 내부에서 자바스크립트 변수나 표현식을 출력할 때는 중괄호({ })를 사용합니다.

------------------------------
추가로 코드에서 보완하고 싶은 기능이나 작동 방식에 대해 더 궁금한 점이 있으시다면 언제든 말씀해 주세요!

[1] [https://ko.legacy.reactjs.org](https://ko.legacy.reactjs.org/docs/hooks-state.html)
[2] [https://blog.anchors-biz.com](https://blog.anchors-biz.com/?p=662)
[3] [https://dsc-sookmyung.tistory.com](https://dsc-sookmyung.tistory.com/174)
[4] [https://jeonghwan-kim.github.io](https://jeonghwan-kim.github.io/series/2021/04/12/lecture-react-usage.html)

------------------------------
  
.filter()

React TSX(또는 JSX)에서 .filter()는 배열에서 원하는 특정 조건에 맞는 데이터만 걸러내어 새로운 배열을 만드는 자바스크립트 내장 함수(Method)입니다.
  원본 배열은 절대 변경하지 않습니다.
UI 개발을 할 때 특정 항목을 화면에서 지우거나(삭제 기능), 
  검색어에 맞는 항목만 보여주거나(검색 기능), 
  특정 카테고리만 분류할 때 필수적으로 사용됩니다.
핵심 동작 원리
.filter()는 배열의 모든 요소를 하나씩 돌면서 콜백 함수를 실행합니다.

* 콜백 함수가 true를 반환하는 요소만 남깁니다.
* 콜백 함수가 false를 반환하는 요소는 버려집니다. 


 1. const handleInputChange = ...
• 의미: handleInputChange라는 이름의 화살표 함수(Arrow Function)를 선언합니다.
• 역할: 사용자가 키보드로 글자를 입력할 때마다 이 함수가 실행됩니다.

───

2. (e: React.ChangeEvent<HTMLInputElement>) => { ... }
• e (이벤트 객체): 사용자가 입력창에 글자를 타이핑할 때 브라우저가 생성하는 '이벤트 정보'를 담고 있는 바구니입니다.
• : React.ChangeEvent<...>: TypeScript에게 이 이벤트가 "React에서 발생하는 값이 변하는(Change) 이벤트"라고 타입을 지정해 주는 것입니다.
• <HTMLInputElement>: React의 수많은 변경 이벤트 중에서도 특히 input 태그(입력창)에서 일어난 이벤트라는 것을 명시합니다. (만약 textarea나 select 태그였다면 이 부분이 달라집니다.)

───

3. setStr(e.target.value);
• e.target: 이벤트가 발생한 진짜 대상, 즉 화면의 input 태그 자체를 가리킵니다.
• e.target.value: 현재 사용자가 입력창에 타이핑한 실제 텍스트 내용입니다.
• setStr(...): React의 useState 훅(Hook)에서 가져왔을 상태 변경 함수입니다. 입력창의 새 글자를 str이라는 상태 변수에 업데이트합니다.

───

요약하자면
이 코드는 "사용자가 HTML 입력창(input)에 글자를 입력할 때마다(ChangeEvent), 그 입력된 텍스트(e.target.value)를 가져와서 React 상태(setStr)에 실시간으로 반영해라"라는 의미입니다.

───

실제 컴포넌트에서는 대략 아래와 같은 방식으로 연결되어 사용됩니다.
tsx
const [str, setStr] = useState<string>(""); // input 태그의 onChange 속성에 이 함수를 연결합니다. <input type="text" value={str} onChange={handleInputChange} />


───

추가적으로 궁금한 점이 있으시다면 말씀해 주세요.
• useState를 포함한 전체 컴포넌트 구조가 보고 싶으신가요?
복수개의 input을 처리하
