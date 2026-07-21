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
