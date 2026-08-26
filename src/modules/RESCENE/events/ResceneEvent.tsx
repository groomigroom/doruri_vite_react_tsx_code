import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/events/TriplesEvent.css';
import './ResceneEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';
import Rescene_e_m_logo from './img/Rescene_e_m_logo.png';

export default function ResceneEvent() {
    DoruriDocumentTitle('RESCENE 이벤트');

    const [rescene_e_moving_count, setRescene_e_moving_count] = useState(0);

    const rescene_e_moving_clickChange = () => {
        setRescene_e_moving_count((PrevRescene_e_moving_count) => (PrevRescene_e_moving_count + 1));
    };

    return (
        <div className="ResceneEvent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/ResceneEvent' className="on">한국어</Link>
                    <Link to='/ResceneEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={Rescene_e_m_logo} alt="RESCENE 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />자동차 클릭 이벤트<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    어디서나 당당하게<br />
                    나아가는 자동차를<br />
                    3번 클릭해 주세요!
                </p>
            </section>
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
