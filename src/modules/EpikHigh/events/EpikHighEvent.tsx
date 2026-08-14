import { useState } from "react";
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/events/TriplesEvent.css';
import './EpikHighEvent.css';
import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';

export default function EpikHighEvent() {
    DoruriDocumentTitle('에픽하이 이벤트');

    const [epikhigh_e_real_lp_top, setEpikhigh_e_real_lp_top] = useState(20);

    const epikhigh_e_real_lp_go_up = () => {
        if (epikhigh_e_real_lp_top !== 20) {
            setEpikhigh_e_real_lp_top((PrevEpikhigh_e_real_lp_top) => (PrevEpikhigh_e_real_lp_top - 100));
        }
    };

    const epikhigh_e_real_lp_go_down = () => {
        if (epikhigh_e_real_lp_top !== 220) {
            setEpikhigh_e_real_lp_top((PrevEpikhigh_e_real_lp_top) => (PrevEpikhigh_e_real_lp_top + 100));
        }
    };

    const [epikhigh_e_real_lp_left, setEpikhigh_e_real_lp_left] = useState(20);

    const epikhigh_e_real_lp_go_left = () => {
        if (epikhigh_e_real_lp_left !== 20) {
            setEpikhigh_e_real_lp_left((PrevEpikhigh_e_real_lp_left) => (PrevEpikhigh_e_real_lp_left - 100));
        }
    }

    const epikhigh_e_real_lp_go_right = () => {
        if (epikhigh_e_real_lp_left !== 220) {
            setEpikhigh_e_real_lp_left((PrevEpikhigh_e_real_lp_left) => (PrevEpikhigh_e_real_lp_left + 100));
        }
    }

    return (
        <div className="epikhighEvent_full">
            <Menu />
            <section className="home_translate">
                <Link to='/EpikHighEvent' className="on">한국어</Link>
                <Link to='/EpikHighEventEng'>English</Link>
            </section>
            <img src={""} alt="에픽하이 이벤트 로고" className="tri_e_logo" />
            <h2 className="tri_e_h2"><img src={MainH2Deco} alt="에픽하이" />LP판 피하기????<img src={MainH2Deco} alt="에픽하이" /></h2>
            <p className='tri_e_intropp'>
                #####빨간색 LP판 피하기<br />
                피하기<br />
                피하기
            </p>
            <section className="epikhigh_e_lp_move_part">
                <div className="epikhigh_e_real_lp" style={{ top: `${epikhigh_e_real_lp_top}px`, left: `${epikhigh_e_real_lp_left}px` }}></div>
                <div className="epikhigh_e_fake_lp"></div>
                <div className="epikhigh_e_lp_m_divide_y epikhigh_e_lp_m_divide1"></div>
                <div className="epikhigh_e_lp_m_divide_y epikhigh_e_lp_m_divide2"></div>
                <div className="epikhigh_e_lp_m_divide_x epikhigh_e_lp_m_divide3"></div>
                <div className="epikhigh_e_lp_m_divide_x epikhigh_e_lp_m_divide4"></div>
            </section>
            <section className="epikhigh_e_lp_mv_buttons">
                <button onClick={epikhigh_e_real_lp_go_up}>위로 이동</button>
                <button onClick={epikhigh_e_real_lp_go_down}>아래로 이동</button>
                <button onClick={epikhigh_e_real_lp_go_left}>왼쪽으로 이동</button>
                <button onClick={epikhigh_e_real_lp_go_right}>오른쪽으로 이동</button>
            </section>
        </div >
    );
}
