import { useState } from 'react';

import './TwsEvent.css';

export default function TwsEvent() {
    const [tws_e_result, setTws_e_result] = useState<boolean>(false);

    const OpenTws_e_result = () => setTws_e_result(true);

    return (
        <div className="twsEvent_full">
            <div className="tws_e_moving_object" onClick={OpenTws_e_result}></div>
            {tws_e_result && (
                <section>
                    <p>당첨</p>
                </section>
            )}
        </div>
    );
}
