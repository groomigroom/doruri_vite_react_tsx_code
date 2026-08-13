import { Link } from "react-router-dom";
import { useState } from "react";

import "../../triples/events/TriplesEvent.css";
import "./AkmuEvent.css";
import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AkmuEvent() {
    const [akmu_e_check_value, setAkmu_e_check_value] = useState<string>('');

    const akmu_e_handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAkmu_e_check_value(e.target.value);
    };

    return (
        <div className="akmuevent_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AkmuEvent' className="on">한국어</Link>
                <Link to='/AkmuEventEng'>English</Link>
            </section>
            <img src={""} alt="악뮤 이벤트 로고" className="tri_e_logo" />
            <h2 className="tri_e_h2"><img src={MainH2Deco} alt="" />ㅇㅇ<img src={MainH2Deco} alt="" /></h2>
            <p className='tri_e_intropp'>
                3줄 소개글<br />
                3줄 소개글<br />
                3줄 소개글
            </p>
            <form className="akmu_e_form" action="" onSubmit={(e) => e.preventDefault()}>
                <input type="radio" name="akmu_event" value="1" checked={akmu_e_check_value === '1'} onChange={akmu_e_handleChange} id="akmu_e_check1" />
                <input type="radio" name="akmu_event" value="2" checked={akmu_e_check_value === '2'} onChange={akmu_e_handleChange} id="akmu_e_check2" />
                <input type="radio" name="akmu_event" value="3" checked={akmu_e_check_value === '3'} onChange={akmu_e_handleChange} id="akmu_e_check3" />
                <label htmlFor="akmu_e_check1" className="akmu_e_checklabel akmu_e_check1_label"><h4>1</h4></label>
                <label htmlFor="akmu_e_check2" className="akmu_e_checklabel akmu_e_check2_label"><h4>2</h4></label>
                <label htmlFor="akmu_e_check3" className="akmu_e_checklabel akmu_e_check3_label"><h4>3</h4></label>
            </form>
            <div>
                {akmu_e_check_value === '1' && <p className="akmu_e_result">1번 선택함 당첨</p>}
                {akmu_e_check_value === '2' && <p className="akmu_e_result">2번 선택함</p>}
                {akmu_e_check_value === '3' && <p className="akmu_e_result">3번 선택함</p>}
            </div>
        </div>
    );
}
