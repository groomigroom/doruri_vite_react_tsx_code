import { useState } from 'react';
import './IllitEvent.css';

export default function IllitEvent() {
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
            <button>a</button>
            <button>b</button>
            <button>c</button>
            <button>d</button>
            <button onClick={OpenIllit_e_letter_i_result}>i</button>

            <button>g</button>
            <button>h</button>
            <button onClick={OpenIllit_e_letter_t_result}>t</button>
            <button>j</button>
            <button>k</button>

            <button>l</button>
            <button>m</button>
            <button>n</button>
            <button onClick={OpenIllit_e_letter_s_result}>s</button>
            <button>o</button>

            <button>x</button>
            <button onClick={OpenIllit_e_letter_m_result}>m</button>
            <button>y</button>
            <button onClick={OpenIllit_e_letter_e_result}>e</button>
            <button>z</button>

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
                    <span>'s </span>
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
                {Illit_e_letter_all_checked && (
                    <section>
                        <p>당첨!!!!!!</p>
                    </section>
                )
                }
            </p>
        </div >
    );
}
