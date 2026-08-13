import { useState } from 'react';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';
import { Link } from 'react-router-dom';

import './TwsEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsEvent() {
    DoruriDocumentTitle('TWS 이벤트');

    const [tws_e_result, setTws_e_result] = useState<boolean>(false);

    const OpenTws_e_result = () => setTws_e_result(true);

    return (
        <div className="twsEvent_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TwsEvent' className="on">한국어</Link>
                <Link to='/TwsEventEng'>English</Link>
            </section>
            <img src={""} alt="TWS 이벤트 로고" className="tri_e_logo" />
            <h2 className="tri_e_h2"><img src={MainH2Deco} alt="TWS" />전구 클릭 이벤트<img src={MainH2Deco} alt="TWS" /></h2>
            <p className='tri_e_intropp'>
                3줄 소개글<br />
                3줄 소개글<br />
                3줄 소개글
            </p>
            <section className='tws_e_bulb_part'>
                <div className="tws_e_moving_object" onClick={OpenTws_e_result}></div>
            </section>
            {tws_e_result && (
                <section className='tws_e_last_result'>
                    <p>당첨</p>
                </section>
            )}
        </div>
    );
}
