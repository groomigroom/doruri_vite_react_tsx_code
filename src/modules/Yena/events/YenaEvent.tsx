import { useState } from "react";

import './YenaEvent.css';
import YenaEventYouModule from "./YenaEventYouModule";
import Menu from "../../Menu";
import { Link } from "react-router-dom";
import MainH2Deco from '../../img/main_h2_deco.png';

export default function YenaEvent() {

    const [Yena_e_false_click, setYena_e_false_click] = useState<boolean>(false);
    const [Yena_e_true_click, setYena_e_true_click] = useState<boolean>(false);
    const Yena_e_false_cl_change = () => {
        setYena_e_false_click(true);
        setYena_e_true_click(false);
    };


    const Yena_e_true_cl_change = () => {
        setYena_e_true_click(true);
        setYena_e_false_click(false);
    };



    return (
        <div className="yenaevent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/Day6Event' className="on">한국어</Link>
                    <Link to='/Day6EventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={""} alt="최예나 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="최예나" />&apos;나&apos; 클릭하기 이벤트<img src={MainH2Deco} alt="최예나" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    자세히 보면 보이는<br />
                    &apos;나&apos;를 찾아서<br />
                    찾아서 클릭해 주세요!
                </p>
            </section>
            <section className="yena_e_moving_part">
                <p onClick={Yena_e_true_cl_change} className="yena_e_me_part">나</p>
                <section onClick={Yena_e_false_cl_change} className="yena_e_you_part">
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />
                    <YenaEventYouModule />

                </section>
            </section>
            {Yena_e_false_click && (
                <section>
                    <p>당첨 아님</p>
                </section>
            )}
            {Yena_e_true_click && (
                <section>
                    <p>당첨!!!!!</p>
                </section>
            )}
        </div>
    );
}
