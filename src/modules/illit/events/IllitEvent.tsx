import { useState } from 'react';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';
import { Link } from 'react-router-dom';
import '../../triples/events/TriplesEvent.css';
import './IllitEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';
import Illit_e_m_logo from './img/Illit_e_m_logo.png';

export default function IllitEvent() {
    DoruriDocumentTitle('ILLIT 이벤트');

    const [Illit_e_letter_i_result, setIllit_e_letter_i_result] = useState<boolean>(false);

    const OpenIllit_e_letter_i_result = () => setIllit_e_letter_i_result(true);

    const [Illit_e_letter_t_result, setIllit_e_letter_t_result] = useState<boolean>(false);

    const OpenIllit_e_letter_t_result = () => setIllit_e_letter_t_result(true);

    const [Illit_e_letter_s_result, setIllit_e_letter_s_result] = useState<boolean>(false);

    const OpenIllit_e_letter_s_result = () => setIllit_e_letter_s_result(true);

    const [Illit_e_letter_m_result, setIllit_e_letter_m_result] = useState<boolean>(false);

    const OpenIllit_e_letter_m_result = () => setIllit_e_letter_m_result(true);

    const [Illit_e_letter_e_result, setIllit_e_letter_e_result] = useState<boolean>(false);

    const OpenIllit_e_letter_e_result = () => setIllit_e_letter_e_result(true);

    const Illit_e_letter_all_checked = Illit_e_letter_i_result &&
        Illit_e_letter_t_result &&
        Illit_e_letter_s_result &&
        Illit_e_letter_m_result &&
        Illit_e_letter_e_result;

    return (
        <div className="IllitEvent_full">
            <header className="triples_e_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/IllitEvent' className="on">한국어</Link>
                    <Link to='/IllitEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={Illit_e_m_logo} alt="ILLIT 이벤트 로고" />
            </section>
            <section className="tri_e_h2">
                <h2><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />노래 제목 맞히기 이벤트<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            </section>
            <section className='tri_e_intropp'>
                <p>
                    3줄 소개글<br />
                    3줄 소개글<br />
                    3줄 소개글
                </p>
            </section>
            <section className='ill_e_button_train_full_wrap'>
                <section className='ill_e_button_train_full'>
                    <section className='ill_e_button_train'>
                        <button>a</button>
                        <button>b</button>
                        <button>c</button>
                        <button>d</button>
                        <button onClick={OpenIllit_e_letter_i_result}>i</button>
                    </section>
                    <section className='ill_e_button_train'>
                        <button>g</button>
                        <button>h</button>
                        <button onClick={OpenIllit_e_letter_t_result}>t</button>
                        <button>j</button>
                        <button>k</button>
                    </section>
                    <section className='ill_e_button_train'>
                        <button>l</button>
                        <button>w</button>
                        <button>n</button>
                        <button onClick={OpenIllit_e_letter_s_result}>s</button>
                        <button>o</button>
                    </section>
                    <section className='ill_e_button_train'>
                        <button>x</button>
                        <button onClick={OpenIllit_e_letter_m_result}>m</button>
                        <button>y</button>
                        <button onClick={OpenIllit_e_letter_e_result}>e</button>
                        <button>z</button>
                    </section>
                </section>
            </section>
            <section className='ill_e_last_answer'>
                <p>
                    {Illit_e_letter_i_result && (
                        <span>i</span>
                    )
                    }
                    {Illit_e_letter_t_result && (
                        <span>t</span>
                    )
                    }
                    {Illit_e_letter_s_result && (
                        <span>&apos;s </span>
                    )
                    }
                    {Illit_e_letter_m_result && (
                        <span>m</span>
                    )
                    }
                    {Illit_e_letter_e_result && (
                        <span>e</span>
                    )
                    }
                </p>
            </section>
            {Illit_e_letter_all_checked && (
                <section className='ill_e_last_result'>
                    <p>당첨!!!!!!</p>
                </section>
            )
            }

        </div >
    );
}
