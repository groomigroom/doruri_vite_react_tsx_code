import { useState } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input type="radio" name="akmu_event" value="1" checked={selectedValue === '1'} onChange={handleChange} />
          <input type="radio" name="akmu_event" value="2" checked={selectedValue === '2'} onChange={handleChange} />
          <input type="radio" name="akmu_event" value="3" checked={selectedValue === '3'} onChange={handleChange} />
        </form>
        <div>
          {selectedValue === '1' && <p>1번 선택함</p>}
          {selectedValue === '2' && <p>2번 선택함</p>}
          {selectedValue === '3' && <p>3번 선택함</p>}
        </div>
      </div>
    </>
  )
}

export default App



<input type="radio" name="akmu_event" value="1" checked={selectedValue === '1'} onChange={handleChange} /> 위 react tsx에서 checked 부분의 의미?                    해당 코드에서 checked={selectedValue === '1'}은 라디오 버튼의 선택 상태를 결정합니다. selectedValue 변수의 값이 문자열 '1'과 같으면 이 라디오 버튼이 화면에 선택된(체크된) 상태로 표시됩니다.주요 특징상태 동기화: 리액트의 state 값에 따라 라디오 버튼의 체크 여부가 결정됩니다.제어 컴포넌트: 값이 바뀔 때 onChange 함수가 실행되어 selectedValue를 갱신합니다.조건부 참/거짓: selectedValue === '1'의 결과는 true 또는 false가 됩니다.더 궁금한 점이 있다면 알려주세요:전체 컴포넌트 코드를 보여주시면 더 자세히 설명해 드릴 수 있습니다.handleChange 함수 동작 방식이 궁금하신가요?    AI 답변에 오류가 있을 수 있습니다. 자세히 알아보기




리액트에서 checked 속성을 직접 작성하는 이유는 화면의 선택 상태와 리액트의 state를 완벽하게 일치시키기 위해서(제어 컴포넌트)입니다.
일반 HTML과 달리 리액트에서는 데이터(상태)가 화면을 지배하는 방식을 권장합니다.
------------------------------
## 1. 리액트가 화면을 제어하기 위해 (Single Source of Truth)

* 데이터 중심 제어: 리액트는 selectedValue라는 하나의 데이터(상태)를 기준으로 화면을 그려야 합니다.
* 동기화: checked 속성을 생략하면, 사용자가 마우스로 라디오 버튼을 눌러도 리액트의 selectedValue 변수가 무엇인지 라디오 버튼 스스로 알 수 없습니다.

## 2. 상태 변화에 따른 유연한 컴포넌트 렌더링

* 작성하신 코드 하단을 보면 selectedValue === '1' && <p>1번 선택함</p> 코드가 있습니다.
* 사용자가 1번 라디오를 누르면 onChange가 실행되어 selectedValue가 '1'이 됩니다.
* 이 데이터 변경이 checked 속성을 통해 라디오 버튼을 체크되게 만들고, 동시에 하단의 텍스트 화면도 바꾸게 만듭니다.

## 3. 초기값 및 외부 변경 처리

* 만약 초기값을 useState<string>('2')로 바꾼다면, 새로고침했을 때 2번 라디오 버튼이 자동으로 체크되어 나타납니다.
* 즉, 사용자의 클릭뿐만 아니라 서버에서 가져온 데이터나 코드 조작으로 라디오 버튼을 선택 상태로 만들 때 필수적입니다.

------------------------------
혹시 코드를 작성하면서 다른 의문이 생기셨나요? 다음 내용도 도와드릴 수 있습니다:

* 이 컴포넌트의 상태 초기화 버튼을 만드는 방법
* 라디오 버튼 옆에 사용자가 볼 수 있는 글자(Label)를 연결하는 방법


