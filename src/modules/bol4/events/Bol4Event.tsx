import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";
import { useState } from "react";

import '../../triples/main/TriplesMain.css';
import '../../triples/events/TriplesEvent.css';
import './Bol4Event.css';

import Menu from "../../Menu";
import MainH2Deco from '../../img/main_h2_deco.png';
import FooterPart from "../../FooterPart";
import bol4_e_logo from './img/bol4_e_logo.png';
import bol4_e_blub from './img/bol4_e_blub.png';


export default function Bol4Event() {
    DoruriDocumentTitle('볼빨간사춘기 이벤트');

    const [bol4_e_last_result, SetBol4_e_last_result] = useState<boolean>(false);
    const OpBol4_e_last_result = () => SetBol4_e_last_result(true);

    return (
        <div className="bol4Event_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/Bol4Event' className="on">한국어</Link>
                    <Link to='/Bol4EventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={bol4_e_logo} alt="볼빨간사춘기 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="볼빨간사춘기" />앨범 제목 클릭 이벤트<img src={MainH2Deco} alt="볼빨간사춘기" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    &apos;볼빨간사춘기&apos;<br />
                    앨범 제목을<br />
                    클릭해 주세요!
                </p>
            </section>
            <section className="bol4_e_event_real_part_full">
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
            </section>
            <FooterPart FooterPartText='ⓒ 켄버스' />
            {bol4_e_last_result && (
                <section className="tri_e_last_win_part">
                    <div className="tri_e_ghost_40px"></div>
                    <section className="tri_m_h2">
                        <h2>
                            <img src={MainH2Deco} alt="볼빨간사춘기" />당첨입니다.<img src={MainH2Deco} alt="볼빨간사춘기" />
                        </h2>
                    </section>
                    <section className="tri_e_p_win_intropp">
                        <p>
                            당첨을 축하드려요!<br />
                            상품은 전등입니다.<br />
                            이벤트에 관심가져 주셔서 감사합니다.<br />
                            이 이벤트는 가상의 이벤트입니다.<br />
                            참고해 주시길 부탁드리겠습니다.<br />
                        </p>
                    </section>
                    <section className="tri_e_p_win_present_150">
                        <img src={bol4_e_blub} alt="" className="triples_e_p_win_present_img" />
                    </section>
                </section>
            )}
        </div>
    );
}

