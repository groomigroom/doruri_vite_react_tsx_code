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
    const day6_e_OpPopop = () => {
        day6_e_SetPopopO(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const day6_e_ClPopop = () => day6_e_SetPopopO(false);

    const [day6_e_result, SetDay6_e_result] = useState<string>("");

    const day6_e_win_result = () => {
        SetDay6_e_result("당첨");
    }

    const [day6_lose_count, SetDay6_lose_count] = useState(0);

    const day6_lose_count_up = () => {
        SetDay6_lose_count((PrevDay6_lose_count) => (PrevDay6_lose_count + 1));
    }

    if (day6_lose_count === 3) {
        SetDay6_e_result("3번 실패입니다...??");
    }

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
                    <li><p>ㅇ</p>
                        <ul>
                            <li><p onClick={day6_lose_count_up}>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                        </ul>
                    </li>
                    <li><p>ㅇ</p>
                        <ul>
                            <li><p>o</p></li>
                            <li><p onClick={() => { day6_e_OpPopop(); day6_e_win_result(); }}>w</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                        </ul>
                    </li>
                    <li><p>ㅇ</p>
                        <ul>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                        </ul>
                    </li>
                    <li><p>ㅇ</p>
                        <ul>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                        </ul>
                    </li>
                </ul>
            </section >
            {(day6_lose_count === 3 || day6_e_PopupO) && (
                <Day6EventPre day6_e_OnCl={day6_e_ClPopop} day6_e_result={day6_e_result} />
            )
            }
        </div >
    );
}
