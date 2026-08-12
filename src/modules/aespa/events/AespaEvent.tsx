import { useState } from "react";

export default function AespaEvent() {
    const [aespa_e_value1, setAespa_e_value1] = useState<string>("");
    const [aespa_e_value2, setAespa_e_value2] = useState<string>("");
    const [aespa_e_value3, setAespa_e_value3] = useState<string>("");
    const [aespa_e_value4, setAespa_e_value4] = useState<string>("");
    const [aespa_e_value5, setAespa_e_value5] = useState<string>("");
    const [aespa_e_value6, setAespa_e_value6] = useState<string>("");
    const [aespa_e_value7, setAespa_e_value7] = useState<string>("");
    const [aespa_e_value8, setAespa_e_value8] = useState<string>("");

    // 👍 useState 대신 일반 변수로 실시간 계산 (무한 루프 완벽 방지)
    let aespa_e_count_now = 1;
    if (aespa_e_value1 === 'l') aespa_e_count_now = 2;
    if (aespa_e_value2 === 'e') aespa_e_count_now = 3;
    if (aespa_e_value3 === 'm') aespa_e_count_now = 4;
    if (aespa_e_value4 === 'o') aespa_e_count_now = 5;
    if (aespa_e_value5 === 'n') aespa_e_count_now = 6;
    if (aespa_e_value6 === 'a') aespa_e_count_now = 7;
    if (aespa_e_value7 === 'd') aespa_e_count_now = 8;

    return (
        <div className="AespaEvent_full">
            <p>현재: {aespa_e_count_now}번째 글자</p>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="aespa_e_value1" value={aespa_e_value1} onChange={(e) => setAespa_e_value1(e.target.value)} />
                {aespa_e_value1 === 'l' && <input type="text" name="aespa_e_value2" value={aespa_e_value2} onChange={(e) => setAespa_e_value2(e.target.value)} />}
                {aespa_e_value2 === 'e' && <input type="text" name="aespa_e_value3" value={aespa_e_value3} onChange={(e) => setAespa_e_value3(e.target.value)} />}
                {aespa_e_value3 === 'm' && <input type="text" name="aespa_e_value4" value={aespa_e_value4} onChange={(e) => setAespa_e_value4(e.target.value)} />}
                {aespa_e_value4 === 'o' && <input type="text" name="aespa_e_value5" value={aespa_e_value5} onChange={(e) => setAespa_e_value5(e.target.value)} />}
                {aespa_e_value5 === 'n' && <input type="text" name="aespa_e_value6" value={aespa_e_value6} onChange={(e) => setAespa_e_value6(e.target.value)} />}
                {aespa_e_value6 === 'a' && <input type="text" name="aespa_e_value7" value={aespa_e_value7} onChange={(e) => setAespa_e_value7(e.target.value)} />}
                {aespa_e_value7 === 'd' && <input type="text" name="aespa_e_value8" value={aespa_e_value8} onChange={(e) => setAespa_e_value8(e.target.value)} />}
                {aespa_e_value8 === 'e' && (
                    <section>
                        <p>당첨</p>
                    </section>
                )}
            </form>
        </div>
    );
}
