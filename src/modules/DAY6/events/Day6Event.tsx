import { useState } from "react";
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import './Day6Event.css';

import Menu from "../../Menu";
import MainH2Deco from '../../img/main_h2_deco.png';
import Day6EventPre from "./Day6EventPre";

export default function Day6Event() {
    DoruriDocumentTitle('DAY6 이벤트');

    const [day6_e_PopupO, day6_e_SetPopopO] = useState<boolean>(false);
    const [day6_e_result, SetDay6_e_result] = useState<string>("");
    const [day6_lose_count, SetDay6_lose_count] = useState(0);

    // 팝업 열기 공통 로직
    const day6_e_OpPopop = () => {
        day6_e_SetPopopO(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const day6_e_ClPopop = () => {
        day6_e_SetPopopO(false);
        // 필요시 팝업을 닫을 때 실패 횟수를 초기화하고 싶다면 주석을 해제하세요
        // if (day6_lose_count >= 3) SetDay6_lose_count(0);
    };

    // 정답 클릭 시 실행
    const day6_e_win_result = () => {
        SetDay6_e_result("당첨");
        day6_e_OpPopop();
    }

    // ⭕ 오답 클릭 시 실행 (무한 루프 방지 및 3회 실패 통합 제어)
    const day6_lose_count_up = () => {
        SetDay6_lose_count((prev) => {
            const nextCount = prev + 1;

            // 실시간으로 변한 카운트(nextCount)가 3이 되는 순간 제어
            if (nextCount >= 3) {
                SetDay6_e_result("3번 실패입니다...??");
                day6_e_OpPopop(); // 3번 실패 시 자동으로 팝업 열고 최상단 이동
            }

            return nextCount;
        });
    }

    // ❌ 기존에 있었던 무한 루프 유발 if문(if (day6_lose_count === 3)...)은 삭제했습니다.

    return (
        <div className="day6event_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Day6Event' className="on">한국어</Link>
                <Link to='/Day6EventEng'>English</Link>
            </section>
            <img src={""} alt="DAY6 이벤트 로고" className="tri_e_logo" />
            <h2 className="tri_e_h2"><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />이름 맞히기 이벤트<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_e_intropp'>
                데이식스에서 드럼을 치는<br />
                3줄 소개글<br />
                3줄 소개글
            </p>
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
                    {/* ... 아래 생략 (동일하게 오답 리스트에 day6_lose_count_up 바인딩) ... */}
                </ul>
            </section >
            <p className="day6_e_lose_count_pp">
                현재 실패 횟수: {day6_lose_count} / 3
            </p>

            {/* 이제 3번 실패 시 내부 함수에서 day6_e_PopupO를 true로 만들어주므로 복잡한 조건문이 필요 없습니다 */}
            {day6_e_PopupO && (
                <Day6EventPre day6_e_OnCl={day6_e_ClPopop} day6_e_result={day6_e_result} />
            )}
        </div >
    );
}
