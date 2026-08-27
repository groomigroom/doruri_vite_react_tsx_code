import { useState } from 'react';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';
import { Link } from 'react-router-dom';

import './TwsEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';
import Tws_e_m_logo from './img/tws_e_m_logo.png';

import Tws_e_star_img from './img/tws_event_star.png';
import Tws_e_p_win_present from './img/tws_event_palzzi.jpg';


export default function TwsEvent() {
    DoruriDocumentTitle('TWS 이벤트');

    const [tws_e_result, setTws_e_result] = useState<boolean>(false);

    const OpenTws_e_result = () => setTws_e_result(true);

    return (
        <div className="twsEvent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/TwsEvent' className="on">한국어</Link>
                    <Link to='/TwsEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={Tws_e_m_logo} alt="TWS 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="TWS" />별 클릭 이벤트<img src={MainH2Deco} alt="TWS" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    빠르게 나타났다가<br />
                    사라지는 별을<br />
                    클릭해 주세요!
                </p>
            </section>
            <section className='tws_e_star_part_full'>
                <section className='tws_e_star_part'>
                    <div className="tws_e_moving_object" onClick={OpenTws_e_result}><img src={Tws_e_star_img} alt="별 모양" /></div>
                </section>
            </section>
            {tws_e_result && (
                <section className="tri_e_last_win_part">
                    <div className="tri_e_ghost_40px"></div>
                    <section className="tri_m_h2">
                        <h2>
                            <img src={MainH2Deco} alt="tws" />당첨입니다.<img src={MainH2Deco} alt="tws" />
                        </h2>
                    </section>
                    <section className="tri_e_p_win_intropp">
                        <p>
                            당첨을 축하드려요!<br />
                            상품은 팔찌입니다.<br />
                            이벤트에 관심가져 주셔서 감사합니다.<br />
                            이 이벤트는 가상의 이벤트입니다.<br />
                            참고해 주시길 부탁드리겠습니다.<br />
                        </p>
                    </section>
                    <section className="tri_e_p_win_present_150">
                        <img src={Tws_e_p_win_present} alt="" className="triples_e_p_win_present_img" />
                    </section>
                </section>
            )}
        </div>
    );
}
