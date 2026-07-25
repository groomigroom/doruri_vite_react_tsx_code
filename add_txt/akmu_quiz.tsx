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
