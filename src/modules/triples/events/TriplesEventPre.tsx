import "./TriplesEventPre.css";

import BabyFlowerAllImg from "./img/baby_flower_img/tri_events_pre_all_s.png"
import TriplesEventPre_m_logo from '../main/img/tri_m_logo.svg';

interface Tri_e_popProp {
    tri_e_OnCl: () => void;
    tri_e_result: number;
}


export default function TriplesEventPre({ tri_e_OnCl, tri_e_result }: Tri_e_popProp) {
    return (
        <div className="tri_e_p_full">
            {tri_e_result === 24 ?
                (< section className="tri_e_p_ticket">
                    <img src={BabyFlowerAllImg} alt="트리플에스" className="tri_e_p_members_img" />
                    <img src={TriplesEventPre_m_logo} alt="트리플에스 로고" className="tri_e_p_logo_img" />
                    {/* #####0층 0구역 0번 랜덤으로 되게 수정하기 */}
                    <p className="tri_e_p_pp"><span>tripleS Baby Flower World Tour</span><br />
                        0층 0구역 0번<br />
                        일시 : 0000년 00월 00일<br />
                        장소 : 0000</p>
                </section>) :
                (<section className="tri_e_p_lose">
                    아쉽지만 모두 정답이 아니에요.
                </section>)}
            <section className="tri_e_p_pp">
                <h2>정답 : {tri_e_result}개</h2>
            </section>
            <button onClick={tri_e_OnCl}>닫기</button>
        </div >
    );
};
