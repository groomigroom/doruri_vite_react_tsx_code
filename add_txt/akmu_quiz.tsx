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
