import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";
import { useState } from "react";

import './Bol4Event.css';

import Menu from "../../Menu";
import MainH2Deco from '../../img/main_h2_deco.png';



export default function Bol4Event() {
    DoruriDocumentTitle('볼빨간사춘기 이벤트');

    const [bol4_e_last_result, SetBol4_e_last_result] = useState<boolean>(false);
    const OpBol4_e_last_result = () => SetBol4_e_last_result(true);

    return (
        <div className="bol4Event_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Bol4Event' className="on">한국어</Link>
                <Link to='/Bol4EventEng'>English</Link>
            </section>
            <img src={""} alt="볼빨간사춘기 이벤트 로고" className="tri_e_logo" />
            <h2 className="tri_e_h2"><img src={MainH2Deco} alt="볼빨간사춘기" />??? 이벤트<img src={MainH2Deco} alt="볼빨간사춘기" /></h2>
            <p className='tri_e_intropp'>
                3줄 소개글<br />
                3줄 소개글<br />
                3줄 소개글
            </p>
            <section className="bol4_e_event_real_part">
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox1"></div>
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox2"></div>
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox3"></div>
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox4"></div>
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox5"></div>
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox6"></div>
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox7"></div>
                <div className="bol4_e_event_r_p_mbox bol4_e_event_r_p_mbox8"></div>
                <p className="bol4_e_event_r_p_m_pp" onClick={OpBol4_e_last_result}>여름아 부탁해</p>
            </section>
            {bol4_e_last_result && (
                <section className="bol4_e_last_r_win">
                    <p>당첨입니다.</p>
                </section>
            )}
        </div>
    );
}

