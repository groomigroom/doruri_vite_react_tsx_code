import { useState } from 'react';

import './ResceneEvent.css';

export default function ResceneEvent() {
    const [rescene_e_moving_count, setRescene_e_moving_count] = useState(0);

    const rescene_e_moving_clickChange = () => {
        setRescene_e_moving_count((PrevRescene_e_moving_count) => (PrevRescene_e_moving_count + 1));
    };

    return (
        <div className="ResceneEvent_full">
            <section className="rescene_e_moving_car_section">
                <div className="rescene_e_moving_car" onClick={rescene_e_moving_clickChange}>

                </div>
            </section>
            <p className='rescene_e_last_count'>클릭 횟수: {rescene_e_moving_count}회</p>
            {rescene_e_moving_count === 3 ?
                (<section className='rescene_e_last_result'>
                    <p>당첨</p>
                </section>) : null
            }
        </div>
    );
}
