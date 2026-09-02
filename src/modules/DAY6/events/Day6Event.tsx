import { useState } from "react";
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import './Day6Event.css';

import Menu from "../../Menu";
import MainH2Deco from '../../img/main_h2_deco.png';
import FooterPart from "../../FooterPart";
import day6_e_logo from './img/day6_e_logo.png';
import day6_e_clip from './img/day6_e_clip.png';

export default function Day6Event() {
    DoruriDocumentTitle('DAY6 이벤트');

    const [day6_e_result, SetDay6_e_result] = useState<string>("");
    const [day6_lose_count, SetDay6_lose_count] = useState(0);


    // 정답 클릭 시 실행
    const day6_e_win_result = () => {
        SetDay6_e_result("당첨입니다.");
    }

    // ⭕ 오답 클릭 시 실행 (무한 루프 방지 및 3회 실패 통합 제어)
    const day6_lose_count_up = () => {
        SetDay6_lose_count((prev) => {
            const nextCount = prev + 1;

            // 실시간으로 변한 카운트(nextCount)가 3이 되는 순간 제어
            if (nextCount >= 3) {
                SetDay6_e_result("3번 실패입니다.");
            }

            return nextCount;
        });
    }

    // ❌ 기존에 있었던 무한 루프 유발 if문(if (day6_lose_count === 3)...)은 삭제했습니다.

    return (
        <div className="day6event_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/Day6Event' className="on">한국어</Link>
                    <Link to='/Day6EventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={day6_e_logo} alt="DAY6 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="DAY6" />이름 맞히기 이벤트<img src={MainH2Deco} alt="DAY6" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    데이식스에서 드럼을 치는<br />
                    멤버 이름을<br />
                    찾아서 클릭해 주세요!
                </p>
            </section>
            <section className="day6_e_event_real_part_full">
                <section className="day6_e_event_real_part">
                    <ul className="day6_e_event_real_part_menu">
                        <li><p>드럼</p>
                            <ul>
                                <li><p onClick={day6_lose_count_up}>독음</p></li>
                                <li><p onClick={day6_lose_count_up}>도음</p></li>
                                <li><p onClick={day6_lose_count_up}>도은</p></li>
                                <li><p onClick={day6_lose_count_up}>도웆</p></li>
                            </ul>
                        </li>
                        <li><p>기타</p>
                            <ul>
                                <li><p onClick={day6_lose_count_up}>도오운</p></li>
                                {/* 정답 클릭 */}
                                <li><p onClick={day6_e_win_result}>도운</p></li>
                                <li><p onClick={day6_lose_count_up}>도훈</p></li>
                                <li><p onClick={day6_lose_count_up}>돌훈</p></li>
                            </ul>
                        </li>
                        <li><p>베이스</p>
                            <ul>
                                <li><p onClick={day6_lose_count_up}>도욱</p></li>
                                <li><p onClick={day6_lose_count_up}>두운</p></li>
                                <li><p onClick={day6_lose_count_up}>고운</p></li>
                                <li><p onClick={day6_lose_count_up}>도군</p></li>
                            </ul>
                        </li>
                        <li><p>보컬</p>
                            <ul>
                                <li><p onClick={day6_lose_count_up}>도욱</p></li>
                                <li><p onClick={day6_lose_count_up}>두움</p></li>
                                <li><p onClick={day6_lose_count_up}>도음</p></li>
                                <li><p onClick={day6_lose_count_up}>도오움</p></li>
                            </ul>
                        </li>
                    </ul>
                </section >
            </section>
            <section className="tri_m_h2">
                <h2>현재 실패 횟수: {day6_lose_count} / 3</h2>
            </section>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
            {day6_e_result === '당첨입니다.' && (
                <section className="tri_e_last_win_part">
                    <div className="tri_e_ghost_40px"></div>
                    <section className="tri_m_h2">
                        <h2>
                            <img src={MainH2Deco} alt="DAY6" />당첨입니다.<img src={MainH2Deco} alt="DAY6" />
                        </h2>
                    </section>
                    <section className="tri_e_p_win_intropp">
                        <p>
                            당첨을 축하드려요!<br />
                            상품은 클립입니다.<br />
                            이벤트에 관심가져 주셔서 감사합니다.<br />
                            이 이벤트는 가상의 이벤트입니다.<br />
                            참고해 주시길 부탁드리겠습니다.<br />
                        </p>
                    </section>
                    <section className="tri_e_p_win_present_150">
                        <img src={day6_e_clip} alt="" className="triples_e_p_win_present_img" />
                    </section>
                </section>
            )}
            {day6_e_result === "3번 실패입니다." && (
                <section className="tri_e_last_win_part">
                    <div className="tri_e_ghost_40px"></div>
                    <section className="tri_m_h2">
                        <h2>
                            <img src={MainH2Deco} alt="DAY6" />당첨이 아닙니다.<img src={MainH2Deco} alt="DAY6" />
                        </h2>
                    </section>
                </section>
            )}
        </div >
    );
}
