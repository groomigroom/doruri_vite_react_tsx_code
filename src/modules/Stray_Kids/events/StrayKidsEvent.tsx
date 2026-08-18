import { useState } from "react";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

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
            <header className="triples_e_header">
                <Menu />
            </header>
            <section className="tri_e_logo">
                <img src={StrayKids_e_m_logo} alt="Stray Kids 이벤트 로고" />
            </section>
            <section className="tri_e_h2">
                <h2><img src={MainH2Deco} alt="Stray Kids" />ddd<img src={MainH2Deco} alt="Stray Kids" /></h2>
            </section>
            <section className='tri_e_intropp'>
                <p>
                    3줄 소개글<br />
                    3줄 소개글<br />
                    3줄 소개글
                </p>
            </section>
            <form action="" className="str_e_form_part">
                <div className="str_e_form_indiv str_e_form_indiv1">
                    <input type="text" name="straykids_e_value1" value={straykids_e_value1} onChange={StrayKids_e_handle_input_change1} />
                </div>
                {straykids_e_value1 === "Battle Ground" && (<div className="str_e_form_indiv str_e_form_indiv2">
                    <input type="text" name="straykids_e_value1" value={straykids_e_value2} onChange={StrayKids_e_handle_input_change2} />
                </div>)}
                {straykids_e_value2 === "Roman Empire" && (<div className="str_e_form_indiv str_e_form_indiv3">
                    <input type="text" name="straykids_e_value1" value={straykids_e_value3} onChange={StrayKids_e_handle_input_change3} />
                </div>)}
                {straykids_e_value3 === "LOVER" &&
                    (<section className="str_e_last_result">
                        <p>당첨</p>
                    </section>)
                }
            </form>
        </div>
    );
}
