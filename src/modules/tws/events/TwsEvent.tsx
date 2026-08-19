import { useState } from 'react';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';
import { Link } from 'react-router-dom';

import './TwsEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';
import Tws_e_m_logo from './img/tws_e_m_logo.png';

import Tws_e_star_img from './img/tws_event_star.png';

export default function TwsEvent() {
    DoruriDocumentTitle('TWS 이벤트');

    const [tws_e_result, setTws_e_result] = useState<boolean>(false);

    const OpenTws_e_result = () => setTws_e_result(true);

    return (
        <div className="twsEvent_full">
            <header className="triples_e_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/TwsEvent' className="on">한국어</Link>
                    <Link to='/TwsEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={Tws_e_m_logo} alt="TWS 이벤트 로고" />
            </section>
            <section className="tri_e_h2">
                <h2><img src={MainH2Deco} alt="TWS" />별 클릭 이벤트<img src={MainH2Deco} alt="TWS" /></h2>
            </section>
            <section className='tri_e_intropp'>
                <p>
                    3줄 소개글<br />
                    3줄 소개글<br />
                    3줄 소개글
                </p>
            </section>
            <section className='tws_e_star_part_full'>
                <section className='tws_e_star_part'>
                    <div className="tws_e_moving_object" onClick={OpenTws_e_result}><img src={Tws_e_star_img} alt="별 모양" /></div>
                </section>
            </section>
            {tws_e_result && (
                <section className='tws_e_last_result'>
                    <p>당첨</p>
                </section>
            )}
        </div>
    );
}
