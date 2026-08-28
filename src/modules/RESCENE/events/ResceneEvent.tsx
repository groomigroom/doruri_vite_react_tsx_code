import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/main/TriplesMain.css';
import '../../triples/events/TriplesEvent.css';
import './ResceneEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';
import Rescene_e_m_logo from './img/Rescene_e_m_logo.png';
import Rescene_e_present from './img/rescene_bangsuk_illust.png';
import Rescene_e_car from './img/rescene_e_car_illust_last.png';

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
                <h2><img src={MainH2Deco} alt="RESCENE" />자동차 클릭 이벤트<img src={MainH2Deco} alt="RESCENE" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    어디서나 당당하게<br />
                    나아가는 자동차를<br />
                    3번 클릭해 주세요!
                </p>
            </section>
            <section className='rescene_e_moving_car_section'>
                <section>
                    <img className="rescene_e_moving_car" src={Rescene_e_car} alt='' onClick={rescene_e_moving_clickChange} />
                </section>
            </section>
            <section className="tri_m_h2">
                <h2>클릭 횟수: {rescene_e_moving_count}회</h2>
            </section>
            {rescene_e_moving_count === 3 &&
                (
                    <section className="tri_e_last_win_part">
                        <div className="tri_e_ghost_40px"></div>
                        <section className="tri_m_h2">
                            <h2>
                                <img src={MainH2Deco} alt="RESCENE" />당첨입니다.<img src={MainH2Deco} alt="RESCENE" />
                            </h2>
                        </section>
                        <section className="tri_e_p_win_intropp">
                            <p>
                                당첨을 축하드려요!<br />
                                상품은 방석입니다.<br />
                                이벤트에 관심가져 주셔서 감사합니다.<br />
                                이 이벤트는 가상의 이벤트입니다.<br />
                                참고해 주시길 부탁드리겠습니다.<br />
                            </p>
                        </section>
                        <section className="tri_e_p_win_present_150">
                            <img src={Rescene_e_present} alt="" className="triples_e_p_win_present_img" />
                        </section>
                    </section>
                )
            }
        </div>
    );
}
