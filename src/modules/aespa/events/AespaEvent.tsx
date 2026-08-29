import { useState } from "react";
import { Link } from "react-router-dom";

import '../../triples/events/TriplesEvent.css';
import './AespaEvent.css';

import Menu from "../../Menu";
import MainH2Deco from '../../img/main_h2_deco.png';
import Aespa_e_m_logo from './img/Aespa_e_m_logo.png';
import FooterPart100vh from "../../FooterPart100vh";

export default function AespaEvent() {
    const [aespa_e_value1, setAespa_e_value1] = useState<string>("");
    const [aespa_e_value2, setAespa_e_value2] = useState<string>("");
    const [aespa_e_value3, setAespa_e_value3] = useState<string>("");
    const [aespa_e_value4, setAespa_e_value4] = useState<string>("");
    const [aespa_e_value5, setAespa_e_value5] = useState<string>("");
    const [aespa_e_value6, setAespa_e_value6] = useState<string>("");
    const [aespa_e_value7, setAespa_e_value7] = useState<string>("");
    const [aespa_e_value8, setAespa_e_value8] = useState<string>("");

    // 👍 useState 대신 일반 변수로 실시간 계산 (무한 루프 완벽 방지)
    let aespa_e_count_now = 1;
    if (aespa_e_value1 === 'l') aespa_e_count_now = 2;
    if (aespa_e_value2 === 'e') aespa_e_count_now = 3;
    if (aespa_e_value3 === 'm') aespa_e_count_now = 4;
    if (aespa_e_value4 === 'o') aespa_e_count_now = 5;
    if (aespa_e_value5 === 'n') aespa_e_count_now = 6;
    if (aespa_e_value6 === 'a') aespa_e_count_now = 7;
    if (aespa_e_value7 === 'd') aespa_e_count_now = 8;

    return (
        <div className="AespaEvent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/AespaEvent' className="on">한국어</Link>
                    <Link to='/AespaEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={Aespa_e_m_logo} alt="aespa 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="aespa" />앨범 제목 1글자씩 맞히기 이벤트<img src={MainH2Deco} alt="aespa" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    2026년 5월 29일에<br />
                    발매된 &apos;aespa&apos;의<br />
                    앨범 제목을 1글자씩 맞혀 보세요!
                </p>
            </section>
            <section className="aespa_e_intropp2">
                <p>현재: {aespa_e_count_now}번째 글자</p>
            </section>
            <form className="aespa_e_form" action="" onSubmit={(e) => e.preventDefault()}>
                <input className="aespa_e_value" type="text" name="aespa_e_value1" value={aespa_e_value1} onChange={(e) => setAespa_e_value1(e.target.value)} />
                {aespa_e_value1 === 'l' && <input className="aespa_e_value" type="text" name="aespa_e_value2" value={aespa_e_value2} onChange={(e) => setAespa_e_value2(e.target.value)} />}
                {aespa_e_value2 === 'e' && <input className="aespa_e_value" type="text" name="aespa_e_value3" value={aespa_e_value3} onChange={(e) => setAespa_e_value3(e.target.value)} />}
                {aespa_e_value3 === 'm' && <input className="aespa_e_value" type="text" name="aespa_e_value4" value={aespa_e_value4} onChange={(e) => setAespa_e_value4(e.target.value)} />}
                {aespa_e_value4 === 'o' && <input className="aespa_e_value" type="text" name="aespa_e_value5" value={aespa_e_value5} onChange={(e) => setAespa_e_value5(e.target.value)} />}
                {aespa_e_value5 === 'n' && <input className="aespa_e_value" type="text" name="aespa_e_value6" value={aespa_e_value6} onChange={(e) => setAespa_e_value6(e.target.value)} />}
                {aespa_e_value6 === 'a' && <input className="aespa_e_value" type="text" name="aespa_e_value7" value={aespa_e_value7} onChange={(e) => setAespa_e_value7(e.target.value)} />}
                {aespa_e_value7 === 'd' && <input className="aespa_e_value" type="text" name="aespa_e_value8" value={aespa_e_value8} onChange={(e) => setAespa_e_value8(e.target.value)} />}
            </form>
            <FooterPart100vh FooterPartText='ⓒ SM엔터테인먼트' />
            {aespa_e_value8 === 'e' && (
                <section className="tri_e_last_win_part">
                    <div className="tri_e_ghost_40px"></div>
                    <section className="tri_m_h2">
                        <h2>
                            <img src={MainH2Deco} alt="stray kids" />당첨입니다.<img src={MainH2Deco} alt="stray kids" />
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
                        <img src={''} alt="" className="triples_e_p_win_present_img" />
                    </section>
                </section>
            )}
        </div>
    );
}
