import { Link } from "react-router-dom";
import { useState } from "react";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/main/TriplesMain.css';
import "../../triples/events/TriplesEvent.css";
import "./AkmuEvent.css";
import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';
import Akmu_e_m_logo from './img/akmu_e_m_logo.png';

export default function AkmuEvent() {
    DoruriDocumentTitle('AKMU 이벤트');

    const [akmu_e_check_value, setAkmu_e_check_value] = useState<string>('');

    const akmu_e_handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAkmu_e_check_value(e.target.value);
    };

    return (
        <div className="akmuevent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/AkmuEvent' className="on">한국어</Link>
                    <Link to='/AkmuEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={Akmu_e_m_logo} alt="악뮤 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="" />&apos;개화&apos; 앨범 타이틀 곡 제목 맞히기<img src={MainH2Deco} alt="" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    &apos;개화&apos; 앨범에 수록된<br />
                    타이틀 곡 제목을<br />
                    맞혀 주세요!
                </p>
            </section>
            <form className="akmu_e_form" action="" onSubmit={(e) => e.preventDefault()}>
                <input type="radio" name="akmu_event" value="1" checked={akmu_e_check_value === '1'} onChange={akmu_e_handleChange} id="akmu_e_check1" />
                <input type="radio" name="akmu_event" value="2" checked={akmu_e_check_value === '2'} onChange={akmu_e_handleChange} id="akmu_e_check2" />
                <input type="radio" name="akmu_event" value="3" checked={akmu_e_check_value === '3'} onChange={akmu_e_handleChange} id="akmu_e_check3" />
                <label htmlFor="akmu_e_check1" className="akmu_e_checklabel akmu_e_check1_label"><h4>1</h4></label>
                <label htmlFor="akmu_e_check2" className="akmu_e_checklabel akmu_e_check2_label"><h4>2</h4></label>
                <label htmlFor="akmu_e_check3" className="akmu_e_checklabel akmu_e_check3_label"><h4>3</h4></label>
                <div className="akmu_e_answer akmu_e_answer1">
                    <p>기쁨, 슬픔, 아름다운 마음</p>
                </div>
                <div className="akmu_e_answer akmu_e_answer2">
                    <p>슬픔, 기쁨, 아름다운 마음</p>
                </div>
                <div className="akmu_e_answer akmu_e_answer3">
                    <p>아름다운 마음, 슬픔, 기쁨</p>
                </div>
            </form>
            <div>
                {akmu_e_check_value === '1' && 
                    (<section className="tri_e_last_win_part">
                        <div className="tri_e_ghost_40px"></div>
                        <section className="tri_m_h2">
                            <h2>
                                <img src={MainH2Deco} alt="악뮤" />당첨입니다.<img src={MainH2Deco} alt="악뮤" />
                            </h2>
                        </section>
                        <section className="tri_e_p_win_intropp">
                                    <p>
                                        당첨을 축하드려요!<br />
                                        상품은 에코백입니다.<br />
                                        이벤트에 관심가져 주셔서 감사합니다.<br />
                                        이 이벤트는 가상의 이벤트입니다.<br />
                                        참고해 주시길 부탁드리겠습니다.<br />
                                    </p>
                                </section>
                                <section className="tri_e_p_win_present_150">
                                    <img src={''} alt="" className="txt_e_p_win_present_img" />
                                </section>
                    </section>)
                }
                {(akmu_e_check_value === '2' || akmu_e_check_value === '3') && 
                    (<section className="tri_e_last_win_part">
                        <div className="tri_e_ghost_40px"></div>
                        <section className="tri_m_h2">
                            <h2>
                                <img src={MainH2Deco} alt="악뮤" />당첨이 아닙니다...<img src={MainH2Deco} alt="악뮤" />
                            </h2>
                        </section>

                    </section>)
                }
            </div>
        </div>
    );
}
