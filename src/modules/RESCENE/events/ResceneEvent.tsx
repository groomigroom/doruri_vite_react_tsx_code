import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import './ResceneEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResceneEvent() {
    DoruriDocumentTitle('RESCENE 이벤트');

    const [rescene_e_moving_count, setRescene_e_moving_count] = useState(0);

    const rescene_e_moving_clickChange = () => {
        setRescene_e_moving_count((PrevRescene_e_moving_count) => (PrevRescene_e_moving_count + 1));
    };

    return (
        <div className="ResceneEvent_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ResceneEvent' className="on">한국어</Link>
                <Link to='/ResceneEventEng'>English</Link>
            </section>
            <img src={""} alt="RESCENE 이벤트 로고" className="tri_e_logo" />
            <h2 className="tri_e_h2"><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />자동차 클릭 이벤트<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_e_intropp'>
                3줄 소개글<br />
                3줄 소개글<br />
                3줄 소개글
            </p>
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
