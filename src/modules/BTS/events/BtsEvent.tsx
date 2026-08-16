import { useState } from 'react';
import './BtsEvent.css';

export default function BtsEvent() {
    const [Bts_e_last_result, setBts_e_last_result] = useState<boolean>(false);

    const Bts_e_last_result_win = () => {
        setBts_e_last_result(true);
    };

    return (
        <div>
            <div className="bts_e_moving_div" onClick={Bts_e_last_result_win}></div>
            {Bts_e_last_result && (
                <section>
                    <p>당첨</p>
                </section>
            )}
        </div>
    );
}
