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


## 💡 React에서 자주 쓰는 3가지 패턴## 1. 특정 데이터 삭제 (아이템 제거)
React 상태(State)에서 특정 데이터를 삭제할 때 주로 사용합니다. 삭제할 id가 아닌 데이터들만 남기는 방식입니다.

interface Todo {
  id: number;
  text: string;
}
const [todos, setTodos] = useState<Todo[]>([
  { id: 1, text: "React 공부하기" },
  { id: 2, text: "맛있는 저녁 먹기" },
]);
// id가 1인 항목을 삭제하는 함수const deleteTodo = (id: number) => {
  // 선택한 id와 일치하지 않는(true인) 항목들로만 새 배열을 구성
  const updatedTodos = todos.filter(todo => todo.id !== id);
  setTodos(updatedTodos);
};


-------------------------------

import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "React 공부하기" },
    { id: 2, text: "맛있는 저녁 먹기" },
  ]);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}


## 2. 검색 및 실시간 필터링
사용자가 입력한 검색어에 매칭되는 데이터만 뽑아서 화면에 보여줄 때 사용합니다. 보통 .filter()로 먼저 걸러낸 뒤 .map()을 연결하여(체이닝) 화면에 그립니다. [3] 

const [searchQuery, setSearchQuery] = useState<string>("");const users = ["Kim", "Lee", "Park", "Choi"];
// 사용자가 입력한 글자가 포함된 이름만 필터링const filteredUsers = users.filter(user => 
  user.toLowerCase().includes(searchQuery.toLowerCase())
);
return (
  <div>
    <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    <ul>
      {/* 필터링된 배열만 화면에 출력 */}
      {filteredUsers.map(user => <li key={user}>{user}</li>)}
    </ul>
  </div>
);

## 3. 카테고리 분류별 보기
쇼핑몰 상품 등에서 특정 카테고리를 선택했을 때 해당 상품 리스트만 분류해 줍니다. [2] 

interface Product {
  name: string;
  category: 'electronics' | 'clothing';
}
const products: Product[] = [
  { name: '노트북', category: 'electronics' },
  { name: '셔츠', category: 'clothing' },
];
// 가전제품('electronics')만 골라내기const electronics = products.filter(item => item.category === 'electronics');

------------------------------
## ⚠️ TSX(TypeScript)에서 사용 시 주의점
TypeScript에서 .filter()를 사용할 때 undefined나 null을 걸러내더라도 타입 시스템이 이를 자동으로 인지하지 못할 때가 있습니다. [6] 

const array = ["Apple", "Banana", undefined];
// ❌ 이렇게만 하면 filtered의 타입은 여전히 (string | undefined)[]로 추론됩니다.const filtered = array.filter(item => item !== undefined); 
//  타입 가드(Type Guard)를 활용해 타입을 string[]으로 명확하게 좁혀주어야 합니다.const strictFiltered = array.filter((item): item is string => item !== undefined);

현재 작성 중이신 코드에서 .filter()가 어떤 데이터를 거르는 데 사용되고 있나요? 에러가 나거나 잘 풀리지 않는 코드가 있다면 직접 공유해 주세요! 구체적인 해결 방법을 제안해 드리겠습니다.

[1] [https://immune01.tistory.com](https://immune01.tistory.com/entry/Reactjs-Filter-%ED%95%A8%EC%88%98)
[2] [https://zldn.tistory.com](https://zldn.tistory.com/99)
[3] [https://www.youtube.com](https://www.youtube.com/watch?v=0lksi4SN9Uc&t=162)
[4] [https://codingeverybody.kr](https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-filter-%ED%95%A8%EC%88%98/)
[5] [https://codingeverybody.kr](https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-filter-%ED%95%A8%EC%88%98/)
[6] [https://systorage.tistory.com](https://systorage.tistory.com/entry/Typescript-typescript-%EC%97%90%EC%84%9C-filter-%EC%82%AC%EC%9A%A9%EC%8B%9C-%EC%A3%BC%EC%9D%98%ED%95%A0-%EC%A0%90)
