import { useState } from "react";
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/events/TriplesEvent.css';
import './TenCMEvent.css';
import Menu from "../../Menu";
import TenCM_e_m_logo from './img/10CM_e_m_logo.png';
import MainH2Deco from '../../img/main_h2_deco.png';
import TenCM_e_pencil_set_img from './img/TenCM_e_pencil_set_illust.png';
import FooterPart100vh from "../../FooterPart100vh";

export default function TenCMEvent() {
    DoruriDocumentTitle('10CM 이벤트');

    const [Tencm_e_number_input1, SetTencm_e_number_input1] = useState<string>("");

    const Tencm_e_number_input1_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input1(e.target.value);
    };

    const [Tencm_e_number_input2, SetTencm_e_number_input2] = useState<string>("");

    const Tencm_e_number_input2_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input2(e.target.value);
    };

    const [Tencm_e_number_input3, SetTencm_e_number_input3] = useState<string>("");

    const Tencm_e_number_input3_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input3(e.target.value);
    };

    const [Tencm_e_number_input4, SetTencm_e_number_input4] = useState<string>("");

    const Tencm_e_number_input4_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input4(e.target.value);
    };

    const [Tencm_e_number_input5, SetTencm_e_number_input5] = useState<string>("");

    const Tencm_e_number_input5_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetTencm_e_number_input5(e.target.value);
    };

    let Tencm_e_number_last_result: number = parseInt(Tencm_e_number_input1) * parseInt(Tencm_e_number_input2) + parseInt(Tencm_e_number_input3) - parseInt(Tencm_e_number_input4) - parseInt(Tencm_e_number_input5);

    let Tencm_number_all_correct_case: boolean = parseInt(Tencm_e_number_input1) <= 5 && parseInt(Tencm_e_number_input1) >= 1 &&
        parseInt(Tencm_e_number_input2) <= 5 && parseInt(Tencm_e_number_input2) >= 1 &&
        parseInt(Tencm_e_number_input3) <= 5 && parseInt(Tencm_e_number_input3) >= 1 &&
        parseInt(Tencm_e_number_input4) <= 5 && parseInt(Tencm_e_number_input4) >= 1 &&
        parseInt(Tencm_e_number_input5) <= 5 && parseInt(Tencm_e_number_input5) >= 1 &&
        parseInt(Tencm_e_number_input1) != parseInt(Tencm_e_number_input2) &&
        parseInt(Tencm_e_number_input1) != parseInt(Tencm_e_number_input3) &&
        parseInt(Tencm_e_number_input1) != parseInt(Tencm_e_number_input4) &&
        parseInt(Tencm_e_number_input1) != parseInt(Tencm_e_number_input5) &&
        parseInt(Tencm_e_number_input2) != parseInt(Tencm_e_number_input3) &&
        parseInt(Tencm_e_number_input2) != parseInt(Tencm_e_number_input4) &&
        parseInt(Tencm_e_number_input2) != parseInt(Tencm_e_number_input5) &&
        parseInt(Tencm_e_number_input3) != parseInt(Tencm_e_number_input4) &&
        parseInt(Tencm_e_number_input3) != parseInt(Tencm_e_number_input5) &&
        parseInt(Tencm_e_number_input4) != parseInt(Tencm_e_number_input5);


    return (
        <div className="TenCMEvent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/TenCMEvent' className="on">한국어</Link>
                    <Link to='/TenCMEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={TenCM_e_m_logo} alt="10CM 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="10CM" />숫자 입력 이벤트<img src={MainH2Deco} alt="10CM" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    1부터 5까지의<br />
                    숫자를 1번씩 사용해서<br />
                    10을 만들어 주세요!
                </p>
            </section>
            <section className="TenCM_e_last_input_part">
                {/* 5 */}
                <input className="TenCM_e_last_input" type="text" name="Tencm_e_number_input1" value={Tencm_e_number_input1} onChange={Tencm_e_number_input1_change} />
                <p>x</p>
                {/* 2 */}
                <input className="TenCM_e_last_input" type="text" name="Tencm_e_number_input2" value={Tencm_e_number_input2} onChange={Tencm_e_number_input2_change} />
                <p>+</p>
                {/* 4 */}
                <input className="TenCM_e_last_input" type="text" name="Tencm_e_number_input3" value={Tencm_e_number_input3} onChange={Tencm_e_number_input3_change} />
                <p>-</p>
                {/* 1 */}
                <input className="TenCM_e_last_input" type="text" name="Tencm_e_number_input4" value={Tencm_e_number_input4} onChange={Tencm_e_number_input4_change} />
                <p>-</p>
                {/* 3 */}
                <input className="TenCM_e_last_input" type="text" name="Tencm_e_number_input5" value={Tencm_e_number_input5} onChange={Tencm_e_number_input5_change} />
                <p>= 10</p>
                <p>최종 결과 : {Tencm_e_number_last_result}</p>
            </section>
            <FooterPart100vh FooterPartText='ⓒ 씨에이엠위더스' />
            {Tencm_e_number_last_result === 10 && Tencm_number_all_correct_case && (
                <section className="tri_e_last_win_part">
                    <section className="tri_e_p_win_intropp">
                        <p>
                            당첨을 축하드려요!<br />
                            상품은 연필 세트입니다.<br />
                            이벤트에 관심가져 주셔서 감사합니다.<br />
                            이 이벤트는 가상의 이벤트입니다.<br />
                            참고해 주시길 부탁드리겠습니다.<br />
                        </p>
                    </section>
                    <section className="tri_e_p_win_present_150">
                        <img src={TenCM_e_pencil_set_img} alt="" className="TenCM_e_p_win_present_img" />
                    </section>
                </section>
            )}
        </div>
    );
}
