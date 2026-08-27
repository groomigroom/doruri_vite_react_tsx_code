import { useState } from 'react';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';
import { Link } from 'react-router-dom';
import '../../triples/events/TriplesEvent.css';
import './IllitEvent.css';
import Menu from '../../Menu';
import MainH2Deco from '../../img/main_h2_deco.png';
import Illit_e_m_logo from './img/Illit_e_m_logo.png';
import Illit_e_p_win_present from './img/illit_event_rhythm_instrument_img.png';

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
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/IllitEvent' className="on">한국어</Link>
                    <Link to='/IllitEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={Illit_e_m_logo} alt="ILLIT 이벤트 로고" />
            </section>
            <section className="tri_m_h2">
                <h2><img src={MainH2Deco} alt="ILLIT" />노래 제목 맞히기 이벤트<img src={MainH2Deco} alt="ILLIT" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    &apos;MAMIHLAPINATAPAI&apos; 앨범의<br />
                    타이틀 곡 제목에<br />
                    들어 가는 알파벳을 골라 주세요!
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
                            상품은 리듬악기세트입니다.<br />
                            이벤트에 관심가져 주셔서 감사합니다.<br />
                            이 이벤트는 가상의 이벤트입니다.<br />
                            참고해 주시길 부탁드리겠습니다.<br />
                        </p>
                    </section>
                    <section className="tri_e_p_win_present_150">
                        <img src={Illit_e_p_win_present} alt="" className="triples_e_p_win_present_img" />
                    </section>
                </section>
            )
            }

        </div >
    );
}
