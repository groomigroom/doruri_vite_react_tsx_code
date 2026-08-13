import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import './Day6Event.css';

import Menu from "../../Menu";
import MainH2Deco from '../../img/main_h2_deco.png';

export default function Day6Event() {
    DoruriDocumentTitle('DAY6 이벤트');

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
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                            <li><p>o</p></li>
                        </ul>
                    </li>
                    <li><p>ㅇ</p>
                        <ul>
                            <li><p>o</p></li>
                            <li><p>w</p></li>
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
            </section>
        </div>
    );
}
