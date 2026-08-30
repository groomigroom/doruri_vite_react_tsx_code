import { useState } from "react";
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/main/TriplesMain.css';
import '../../triples/events/TriplesEvent.css';
import '../../ALLDAY_PROJECT/events/AlldayProjectEvent.css';
import './EpikHighEvent.css';
import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';
import epikhigh_e_real_lp_img from './img/epikhigh_e_real_lp_img.png';
import epikhigh_e_fake_lp_img from './img/epikhigh_e_fake_lp_img.png';
import FooterPart from "../../FooterPart";

export default function EpikHighEvent() {
    DoruriDocumentTitle('에픽하이 이벤트');

    const [epikhigh_e_lp_move_count, setEpikhigh_e_lp_move_count] = useState(0);

    const epikhigh_e_lp_move_count_up = () => {
        setEpikhigh_e_lp_move_count((PrevEpikhigh_e_lp_move_count) => (PrevEpikhigh_e_lp_move_count + 1));
    };

    const [epikhigh_e_real_lp_top, setEpikhigh_e_real_lp_top] = useState(20);

    const [epikhigh_e_fake_lp_top, setEpikhigh_e_fake_lp_top] = useState(220);
    const [epikhigh_e_fake_lp_left, setEpikhigh_e_fake_lp_left] = useState(220);

    const epikhigh_e_fake_lp_go_up = () => {
        if (epikhigh_e_fake_lp_top != 20) {
            setEpikhigh_e_fake_lp_top((PrevEpikhigh_e_fake_lp_top) => (PrevEpikhigh_e_fake_lp_top - 100));
        }
    };

    const epikhigh_e_fake_lp_go_down = () => {
        if (epikhigh_e_fake_lp_top != 220) {
            setEpikhigh_e_fake_lp_top((PrevEpikhigh_e_fake_lp_top) => (PrevEpikhigh_e_fake_lp_top + 100));
        }
    };

    const epikhigh_e_fake_lp_go_left = () => {
        if (epikhigh_e_fake_lp_left !== 20) {
            setEpikhigh_e_fake_lp_left((PrevEpikhigh_e_real_lp_left) => (PrevEpikhigh_e_real_lp_left - 100));
        };
    };

    const epikhigh_e_fake_lp_go_right = () => {
        if (epikhigh_e_fake_lp_left !== 220) {
            setEpikhigh_e_fake_lp_left((PrevEpikhigh_e_real_lp_left) => (PrevEpikhigh_e_real_lp_left + 100));
        };
    };

    const Epikhigh_e_fake_lp_functions = [epikhigh_e_fake_lp_go_up, epikhigh_e_fake_lp_go_down, epikhigh_e_fake_lp_go_left, epikhigh_e_fake_lp_go_right];


    const epikhigh_e_real_lp_go_up = () => {
        if (epikhigh_e_real_lp_top !== 20) {
            setEpikhigh_e_real_lp_top((PrevEpikhigh_e_real_lp_top) => (PrevEpikhigh_e_real_lp_top - 100));
            const Epikhigh_e_fake_lp_rdIndex = Math.floor(Math.random() * Epikhigh_e_fake_lp_functions.length);

            Epikhigh_e_fake_lp_functions[Epikhigh_e_fake_lp_rdIndex]();
            epikhigh_e_lp_move_count_up();
        }
    };

    const epikhigh_e_real_lp_go_down = () => {
        if (epikhigh_e_real_lp_top !== 220) {
            setEpikhigh_e_real_lp_top((PrevEpikhigh_e_real_lp_top) => (PrevEpikhigh_e_real_lp_top + 100));
            const Epikhigh_e_fake_lp_rdIndex = Math.floor(Math.random() * Epikhigh_e_fake_lp_functions.length);

            Epikhigh_e_fake_lp_functions[Epikhigh_e_fake_lp_rdIndex]();
            epikhigh_e_lp_move_count_up();
        }
    };

    const [epikhigh_e_real_lp_left, setEpikhigh_e_real_lp_left] = useState(20);

    const epikhigh_e_real_lp_go_left = () => {
        if (epikhigh_e_real_lp_left !== 20) {
            setEpikhigh_e_real_lp_left((PrevEpikhigh_e_real_lp_left) => (PrevEpikhigh_e_real_lp_left - 100));
            const Epikhigh_e_fake_lp_rdIndex = Math.floor(Math.random() * Epikhigh_e_fake_lp_functions.length);

            Epikhigh_e_fake_lp_functions[Epikhigh_e_fake_lp_rdIndex]();
            epikhigh_e_lp_move_count_up();
        }
    }

    const epikhigh_e_real_lp_go_right = () => {
        if (epikhigh_e_real_lp_left !== 220) {
            setEpikhigh_e_real_lp_left((PrevEpikhigh_e_real_lp_left) => (PrevEpikhigh_e_real_lp_left + 100));
            const Epikhigh_e_fake_lp_rdIndex = Math.floor(Math.random() * Epikhigh_e_fake_lp_functions.length);

            Epikhigh_e_fake_lp_functions[Epikhigh_e_fake_lp_rdIndex]();
            epikhigh_e_lp_move_count_up();
        }
    }


    return (
        <div className="epikhighEvent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/EpikHighEvent' className="on">한국어</Link>
                    <Link to='/EpikHighEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={""} alt="에픽하이 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="에픽하이" />빨간색 LP판 피하기 이벤트<img src={MainH2Deco} alt="에픽하이" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    빨간색 LP판을<br />
                    5번 피하면<br />
                    당첨이에요!
                </p>
            </section>
            <section className="epikhigh_e_lp_move_part_full">
                <section className="epikhigh_e_lp_move_part">
                    <div className="epikhigh_e_real_lp" style={{ top: `${epikhigh_e_real_lp_top}px`, left: `${epikhigh_e_real_lp_left}px` }}>
                        <img src={epikhigh_e_real_lp_img} alt='real_lp' />
                    </div>
                    <div className="epikhigh_e_fake_lp" style={{ top: `${epikhigh_e_fake_lp_top}px`, left: `${epikhigh_e_fake_lp_left}px` }}>
                        <img src={epikhigh_e_fake_lp_img} alt='real_lp' />
                    </div>
                    <div className="epikhigh_e_lp_m_divide_y epikhigh_e_lp_m_divide1"></div>
                    <div className="epikhigh_e_lp_m_divide_y epikhigh_e_lp_m_divide2"></div>
                    <div className="epikhigh_e_lp_m_divide_x epikhigh_e_lp_m_divide3"></div>
                    <div className="epikhigh_e_lp_m_divide_x epikhigh_e_lp_m_divide4"></div>
                </section>
            </section>
            <section className='alldayproject_e_maze_RB_buttons_full'>
                <section className='alldayproject_e_maze_RB_buttons'>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_top' onClick={epikhigh_e_real_lp_go_up}>위로 이동</button>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_down' onClick={epikhigh_e_real_lp_go_down}>아래로 이동</button>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_left' onClick={epikhigh_e_real_lp_go_left}>왼쪽으로 이동</button>
                    <button className='alldayproject_e_maze_RB_button alldayproject_e_maze_RB_to_right' onClick={epikhigh_e_real_lp_go_right}>오른쪽으로 이동</button>
                </section>
            </section>
            <FooterPart FooterPartText='ⓒ 아워즈' />
            {
                epikhigh_e_lp_move_count === 5 && (epikhigh_e_real_lp_top != epikhigh_e_fake_lp_top || epikhigh_e_real_lp_left != epikhigh_e_fake_lp_left) && (
                    <section className="tri_e_last_win_part">
                        <div className="tri_e_ghost_40px"></div>
                        <section className="tri_m_h2">
                            <h2>
                                <img src={MainH2Deco} alt="에픽하이" />당첨입니다.<img src={MainH2Deco} alt="에픽하이" />
                            </h2>
                        </section>
                        <section className="tri_e_p_win_intropp">
                            <p>
                                당첨을 축하드려요!<br />
                                상품은 ---입니다.<br />
                                이벤트에 관심가져 주셔서 감사합니다.<br />
                                이 이벤트는 가상의 이벤트입니다.<br />
                                참고해 주시길 부탁드리겠습니다.<br />
                            </p>
                        </section>
                        <section className="tri_e_p_win_present_150">
                            <img src={''} alt="" className="triples_e_p_win_present_img" />
                        </section>
                    </section>
                )
            }
            {
                epikhigh_e_real_lp_top === epikhigh_e_fake_lp_top && epikhigh_e_real_lp_left === epikhigh_e_fake_lp_left && (
                    <section className="tri_e_last_win_part">
                        <div className="tri_e_ghost_40px"></div>
                        <section className="tri_m_h2">
                            <h2>
                                <img src={MainH2Deco} alt="에픽하이" />당첨이 아닙니다.<img src={MainH2Deco} alt="에픽하이" />
                            </h2>
                        </section>
                    </section>
                )
            }
        </div >
    );
}
