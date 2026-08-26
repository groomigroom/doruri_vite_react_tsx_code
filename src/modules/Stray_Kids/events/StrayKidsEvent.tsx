import { Link } from "react-router-dom";
import { useState } from "react";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/main/TriplesMain.css';
import '../../triples/events/TriplesEvent.css';
import './StrayKidsEvent.css';
import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';

import StrayKids_e_m_logo from './img/StrayKids_e_m_logo.png';

export default function StrayKidsEvent() {
    DoruriDocumentTitle('Stray Kids 이벤트');

    const [straykids_e_value1, setStraykids_e_value1] = useState<string>("");

    const StrayKids_e_handle_input_change1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStraykids_e_value1(e.target.value);
    }

    const [straykids_e_value2, setStraykids_e_value2] = useState<string>("");

    const StrayKids_e_handle_input_change2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStraykids_e_value2(e.target.value);
    }

    const [straykids_e_value3, setStraykids_e_value3] = useState<string>("");

    const StrayKids_e_handle_input_change3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStraykids_e_value3(e.target.value);
    }


    return (
        <div className="straykidsEvent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/TxtEvent' className="on">한국어</Link>
                    <Link to='/TxtEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={StrayKids_e_m_logo} alt="Stray Kids 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="Stray Kids" />노래 제목 맞히기 이벤트<img src={MainH2Deco} alt="Stray Kids" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    &apos;SKZ-REPLAY 2026 Pt.1&apos; 앨범의<br />
                    1, 2, 3번 수록곡<br />
                    제목을 맞혀 주세요!
                </p>
            </section>
            <form action="" className="str_e_form_part">
                <section className="tri_m_h2">
                    <h2>1번답 입력</h2>
                </section>
                <div className="str_e_form_indiv_wrap">
                    <div className="str_e_form_indiv">
                        <input type="text" name="straykids_e_value1" value={straykids_e_value1} onChange={StrayKids_e_handle_input_change1} />
                    </div>
                </div>
                {straykids_e_value1 === "Battle Ground" && (
                    <>
                        <section className="tri_m_h2">
                            <h2>2번답 입력</h2>
                        </section>
                        <div className="str_e_form_indiv_wrap">
                            <div className="str_e_form_indiv">
                                <input type="text" name="straykids_e_value1" value={straykids_e_value2} onChange={StrayKids_e_handle_input_change2} />
                            </div>
                        </div>
                    </>
                )}
                {straykids_e_value2 === "Roman Empire" && (
                    <>
                        <section className="tri_m_h2">
                            <h2>3번답 입력</h2>
                        </section>
                        <div className="str_e_form_indiv_wrap">
                            <div className="str_e_form_indiv">
                                <input type="text" name="straykids_e_value1" value={straykids_e_value3} onChange={StrayKids_e_handle_input_change3} />
                            </div>
                        </div>
                    </>)}
                {straykids_e_value3 === "LOVER" &&
                    (<section className="tri_e_last_win_part">
                        <div className="tri_e_ghost_40px"></div>
                        <section className="tri_m_h2">
                            <h2>
                                <img src={MainH2Deco} alt="stray kids" />당첨입니다.<img src={MainH2Deco} alt="stray kids" />
                            </h2>
                        </section>
                        <section className="tri_e_p_win_present_150">
                            <div>
                                <h3>가사집</h3>
                                <p>가사 내용 ----<br/>
                                ----------------<br/>
                                ----------------<br/>
                                ----------------<br/>
                                ----------------<br/>
                                ----------------<br/>
                                ----------------
                                </p>
                            </div>
                            <img src={''} alt="" className="akmu_e_p_win_present_img" />
                        </section>
                    </section>)
                }
            </form>
        </div>
    );
}
