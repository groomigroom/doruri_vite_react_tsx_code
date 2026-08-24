import { useState } from 'react';
import './BtsEvent.css';

export default function BtsEvent() {
    const [Bts_e_last_result, setBts_e_last_result] = useState<number>(0);

    const Bts_e_last_result_win = () => {
        setBts_e_last_result((prev) => prev + 1);
    };

    return (
        <div>
            <div className="bts_e_moving_div" onClick={Bts_e_last_result_win}></div>
            <p>현재 점수 {Bts_e_last_result}점</p>
            {Bts_e_last_result >= 3 ? (
                <section>
                    <p>당첨</p>
                </section>
            ) : (
                <section>
                    <p>탈락</p>
                </section>
            )}
        </div>
    );
}

// 10초 뒤에 싹 다 가려버리고 결과 등장하게
