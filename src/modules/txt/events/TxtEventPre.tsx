import './TxtEventPre.css';
import Txt_keying_img from './img/txt_e_keyring_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

interface Txt_e_popProp {
    txt_e_OnCl: () => void;
    txt_e_result: string;
}

export default function TxtEventPre({ txt_e_OnCl, txt_e_result }: Txt_e_popProp) {
    return (
        <div className="txt_e_p_full">
            <h2 className="tri_e_p_h2"><img src={MainH2Deco} alt="트리플에스" />{txt_e_result}<img src={MainH2Deco} alt="트리플에스" /></h2>
            {txt_e_result === "맞춘 개수: 4개" ?
                (<section className='txt_e_p_win'>
                    <p cla></p>
                </section>) :
                (<section>당첨 아님</section>)
            }
            <img src={Txt_keying_img} alt="투모로우바이투게더 키링" />
            <button onClick={txt_e_OnCl}>닫기</button>
        </div>
    );

}
