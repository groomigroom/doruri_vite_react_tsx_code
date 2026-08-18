import { useState } from "react";

export default function TenCMEvent() {
    const [Tencm_e_number_input1, SetTencm_e_number_input1] = useState<string>("");

    const Tencm_e_number_input1_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input1(e.target.value);
    };

    const [Tencm_e_number_input2, SetTencm_e_number_input2] = useState<string>("");

    const Tencm_e_number_input2_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input2(e.target.value);
    };

    const [Tencm_e_number_input3, SetTencm_e_number_input3] = useState<string>("");

    const Tencm_e_number_input3_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input3(e.target.value);
    };

    const [Tencm_e_number_input4, SetTencm_e_number_input4] = useState<string>("");

    const Tencm_e_number_input4_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input4(e.target.value);
    };

    const [Tencm_e_number_input5, SetTencm_e_number_input5] = useState<string>("");

    const Tencm_e_number_input5_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input5(e.target.value);
    };

    let Tencm_e_number_last_result: number = parseInt(Tencm_e_number_input1) * parseInt(Tencm_e_number_input2) + parseInt(Tencm_e_number_input3) - parseInt(Tencm_e_number_input4) - parseInt(Tencm_e_number_input5);

    let Tencm_e_number_last_result_true: boolean = Tencm_e_number_last_result === 10 &&
        parseInt(Tencm_e_number_input1) <= 5 && parseInt(Tencm_e_number_input1) >= 1 &&
        parseInt(Tencm_e_number_input2) <= 5 && parseInt(Tencm_e_number_input2) >= 1 &&
        parseInt(Tencm_e_number_input3) <= 5 && parseInt(Tencm_e_number_input3) >= 1 &&
        parseInt(Tencm_e_number_input4) <= 5 && parseInt(Tencm_e_number_input4) >= 1 &&
        parseInt(Tencm_e_number_input5) <= 5 && parseInt(Tencm_e_number_input5) >= 1;


    return (
        <div className="TenCMEvent_full">
            <p>1부터 5의 숫자를 넣어서 10이 되게 하세요</p>
            {/* 5 */}
            <input type="text" name="Tencm_e_number_input1" value={Tencm_e_number_input1} onChange={Tencm_e_number_input1_change} />
            <p>x</p>
            {/* 2 */}
            <input type="text" name="Tencm_e_number_input2" value={Tencm_e_number_input2} onChange={Tencm_e_number_input2_change} />
            <p>+</p>
            {/* 4 */}
            <input type="text" name="Tencm_e_number_input3" value={Tencm_e_number_input3} onChange={Tencm_e_number_input3_change} />
            <p>-</p>
            {/* 1 */}
            <input type="text" name="Tencm_e_number_input4" value={Tencm_e_number_input4} onChange={Tencm_e_number_input4_change} />
            <p>-</p>
            {/* 3 */}
            <input type="text" name="Tencm_e_number_input5" value={Tencm_e_number_input5} onChange={Tencm_e_number_input5_change} />
            <p>= 10</p>
            <p>최종 결과 : {Tencm_e_number_last_result}</p>
            {Tencm_e_number_last_result_true && (
                <section>
                    <p>당첨입니다.</p>
                </section>
            )}
        </div>
    );
}
