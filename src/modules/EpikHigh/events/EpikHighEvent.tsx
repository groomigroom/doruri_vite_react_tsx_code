import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/events/TriplesEvent.css';
import './EpikHighEvent.css';
import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';

export default function EpikHighEvent() {
    DoruriDocumentTitle('에픽하이 이벤트');

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
                <div className="epikhigh_e_real_lp"></div>
                <div className="epikhigh_e_lp_m_divide_y epikhigh_e_lp_m_divide1"></div>
                <div className="epikhigh_e_lp_m_divide_y epikhigh_e_lp_m_divide2"></div>
                <div className="epikhigh_e_lp_m_divide_x epikhigh_e_lp_m_divide3"></div>
                <div className="epikhigh_e_lp_m_divide_x epikhigh_e_lp_m_divide4"></div>
            </section>
        </div>
    );
}
