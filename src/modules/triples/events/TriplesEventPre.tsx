import "./TriplesEventPre.css";

import BabyFlowerAllImg from "./img/baby_flower_img/tri_events_pre_all_s.png"
import TriplesEventPre_m_logo from '../main/img/tri_m_logo.svg';
import MainH2Deco from "../../img/main_h2_deco.png";

interface Tri_e_popProp {
    tri_e_OnCl: () => void;
    tri_e_result: number;
}


export default function TriplesEventPre({ tri_e_OnCl, tri_e_result }: Tri_e_popProp) {
    let tri_e_p_floor_num = Math.floor(Math.random() * 3) + 1;

    let tri_e_p_part_num = Math.floor(Math.random() * 10) + 1;

    let tri_e_p_part_letter;

    switch (tri_e_p_part_num) {
        case 1:
            tri_e_p_part_letter = '가';
            break;
        case 2:
            tri_e_p_part_letter = '나';
            break;
        case 3:
            tri_e_p_part_letter = '다';
            break;
        case 4:
            tri_e_p_part_letter = '라';
            break;
        case 5:
            tri_e_p_part_letter = '마';
            break;
        case 6:
            tri_e_p_part_letter = '바';
            break;
        case 7:
            tri_e_p_part_letter = '사';
            break;
        case 8:
            tri_e_p_part_letter = '아';
            break;
        case 9:
            tri_e_p_part_letter = '자';
            break;
        case 10:
            tri_e_p_part_letter = '차';
            break;
    }

    let tri_e_p_floor_num2 = Math.floor(Math.random() * 100000) + 1;

    return (
        <div className="tri_e_p_full">
            <h2 className="tri_e_p_h2"><img src={MainH2Deco} alt="트리플에스" />정답 : {tri_e_result}개<img src={MainH2Deco} alt="트리플에스" /></h2>
            {tri_e_result === 24 ?
                (<section className="tri_e_p_win">
                    <section className="tri_e_p_ticket">
                        <img src={BabyFlowerAllImg} alt="트리플에스" className="tri_e_p_members_img" />
                        <img src={TriplesEventPre_m_logo} alt="트리플에스 로고" className="tri_e_p_logo_img" />
                        {/* #####0층 0구역 0번 랜덤으로 되게 수정하기 */}
                        <p className="tri_e_p_pp"><span>tripleS Baby Flower World Tour</span><br />
                            {tri_e_p_floor_num}층 &apos;{tri_e_p_part_letter}&apos;구역 {tri_e_p_floor_num2}번<br />
                            일시 : 0000년 00월 00일<br />
                            장소 : 0000</p>
                    </section>
                    <button onClick={tri_e_OnCl} className="tri_e_p_close tri_e_p_close_win">닫기</button></section>
                ) :
                (<section className="tri_e_p_lose">
                    <p className="tri_e_p_pp_lose">아쉽지만 모두 정답이 아니에요.</p>
                    <button onClick={tri_e_OnCl} className="tri_e_p_close tri_e_p_close_lose">닫기</button>
                </section>)}
        </div >
    );
};
