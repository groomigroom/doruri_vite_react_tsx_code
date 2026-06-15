import { useState } from "react";

import TriplesEventPre from "./TriplesEventPre";

import "./TriplesEvent.css";
import TriEventLogo from "./img/tri_events_logo.png";
import TriEventS1 from "./img/s1_img.jpg";
import TriEventS2 from "./img/s2_img.jpg";
import TriEventS3 from "./img/s3_img.jpg";
import TriEventS4 from "./img/s4_img.jpg";
import TriEventS5 from "./img/s5_img.jpg";
import TriEventS6 from "./img/s6_img.jpg";
import TriEventS7 from "./img/s7_img.jpg";
import TriEventS8 from "./img/s8_img.jpg";
import TriEventS9 from "./img/s9_img.jpg";
import TriEventS10 from "./img/s10_img.jpg";
import TriEventS11 from "./img/s11_img.jpg";
import TriEventS12 from "./img/s12_img.jpg";
import TriEventS13 from "./img/s13_img.jpg";
import TriEventS14 from "./img/s14_img.jpg";
import TriEventS15 from "./img/s15_img.jpg";
import TriEventS16 from "./img/s16_img.jpg";
import TriEventS17 from "./img/s17_img.jpg";
import TriEventS18 from "./img/s18_img.jpg";
import TriEventS19 from "./img/s19_img.jpg";
import TriEventS20 from "./img/s20_img.jpg";
import TriEventS21 from "./img/s21_img.jpg";
import TriEventS22 from "./img/s22_img.jpg";
import TriEventS23 from "./img/s23_img.jpg";
import TriEventS24 from "./img/s24_img.jpg";


interface tri_e_formState {
    tri_e_s1: string;
    tri_e_s2: string;
    tri_e_s3: string;
    tri_e_s4: string;
    tri_e_s5: string;
    tri_e_s6: string;
    tri_e_s7: string;
    tri_e_s8: string;
    tri_e_s9: string;
    tri_e_s10: string;
    tri_e_s11: string;
    tri_e_s12: string;
    tri_e_s13: string;
    tri_e_s14: string;
    tri_e_s15: string;
    tri_e_s16: string;
    tri_e_s17: string;
    tri_e_s18: string;
    tri_e_s19: string;
    tri_e_s20: string;
    tri_e_s21: string;
    tri_e_s22: string;
    tri_e_s23: string;
    tri_e_s24: string;
}

export default function TriplesEvent() {
    const [tri_e_form, tri_e_setform] = useState<tri_e_formState>({
        tri_e_s1: '',
        tri_e_s2: '',
        tri_e_s3: '',
        tri_e_s4: '',
        tri_e_s5: '',
        tri_e_s6: '',
        tri_e_s7: '',
        tri_e_s8: '',
        tri_e_s9: '',
        tri_e_s10: '',
        tri_e_s11: '',
        tri_e_s12: '',
        tri_e_s13: '',
        tri_e_s14: '',
        tri_e_s15: '',
        tri_e_s16: '',
        tri_e_s17: '',
        tri_e_s18: '',
        tri_e_s19: '',
        tri_e_s20: '',
        tri_e_s21: '',
        tri_e_s22: '',
        tri_e_s23: '',
        tri_e_s24: '',
    });

    const tri_e_handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        tri_e_setform((tri_e_prev) => ({
            ...tri_e_prev,
            [name]: value,
        }));
    };

    let tri_e_result = 0;
    if (tri_e_form.tri_e_s1 === "윤서연") tri_e_result++;
    if (tri_e_form.tri_e_s2 === "정혜린") tri_e_result++;
    if (tri_e_form.tri_e_s3 === "이지우") tri_e_result++;
    if (tri_e_form.tri_e_s4 === "김채연") tri_e_result++;
    if (tri_e_form.tri_e_s5 === "김유연") tri_e_result++;
    if (tri_e_form.tri_e_s6 === "김수민") tri_e_result++;
    if (tri_e_form.tri_e_s7 === "김나경") tri_e_result++;
    if (tri_e_form.tri_e_s8 === "공유빈") tri_e_result++;
    if (tri_e_form.tri_e_s9 === "카에데") tri_e_result++;
    if (tri_e_form.tri_e_s10 === "서다현") tri_e_result++;
    if (tri_e_form.tri_e_s11 === "코토네") tri_e_result++;
    if (tri_e_form.tri_e_s12 === "곽연지") tri_e_result++;
    if (tri_e_form.tri_e_s13 === "니엔") tri_e_result++;
    if (tri_e_form.tri_e_s14 === "박소현") tri_e_result++;
    if (tri_e_form.tri_e_s15 === "신위") tri_e_result++;
    if (tri_e_form.tri_e_s16 === "마유") tri_e_result++;
    if (tri_e_form.tri_e_s17 === "린") tri_e_result++;
    if (tri_e_form.tri_e_s18 === "주빈") tri_e_result++;
    if (tri_e_form.tri_e_s19 === "정하연") tri_e_result++;
    if (tri_e_form.tri_e_s20 === "박시온") tri_e_result++;
    if (tri_e_form.tri_e_s21 === "김채원") tri_e_result++;
    if (tri_e_form.tri_e_s22 === "설린") tri_e_result++;
    if (tri_e_form.tri_e_s23 === "서아") tri_e_result++;
    if (tri_e_form.tri_e_s24 === "지연") tri_e_result++;

    console.log(tri_e_result);

    return (
        <div className="triplesevent_full">
            <TriplesEventPre />
            <img src={TriEventLogo} alt="트리플에스 이벤트 로고" className="tri_e_logo" />
            <h2 className="tri_e_h2">이름 맞추기 이벤트</h2>
            <section className="tri_e_img">
                <form className="tri_e_form" action="">
                    <input className="tri_e_fo1" type="text" name="tri_e_s1" value={tri_e_form.tri_e_s1} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo2" type="text" name="tri_e_s2" value={tri_e_form.tri_e_s2} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo3" type="text" name="tri_e_s3" value={tri_e_form.tri_e_s3} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo4" type="text" name="tri_e_s4" value={tri_e_form.tri_e_s4} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo5" type="text" name="tri_e_s5" value={tri_e_form.tri_e_s5} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo6" type="text" name="tri_e_s6" value={tri_e_form.tri_e_s6} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo7" type="text" name="tri_e_s7" value={tri_e_form.tri_e_s7} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo8" type="text" name="tri_e_s8" value={tri_e_form.tri_e_s8} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo9" type="text" name="tri_e_s9" value={tri_e_form.tri_e_s9} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo10" type="text" name="tri_e_s10" value={tri_e_form.tri_e_s10} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo11" type="text" name="tri_e_s11" value={tri_e_form.tri_e_s11} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo12" type="text" name="tri_e_s12" value={tri_e_form.tri_e_s12} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo13" type="text" name="tri_e_s13" value={tri_e_form.tri_e_s13} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo14" type="text" name="tri_e_s14" value={tri_e_form.tri_e_s14} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo15" type="text" name="tri_e_s15" value={tri_e_form.tri_e_s15} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo16" type="text" name="tri_e_s16" value={tri_e_form.tri_e_s16} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo17" type="text" name="tri_e_s17" value={tri_e_form.tri_e_s17} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo18" type="text" name="tri_e_s18" value={tri_e_form.tri_e_s18} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo19" type="text" name="tri_e_s19" value={tri_e_form.tri_e_s19} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo20" type="text" name="tri_e_s20" value={tri_e_form.tri_e_s20} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo21" type="text" name="tri_e_s21" value={tri_e_form.tri_e_s21} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo22" type="text" name="tri_e_s22" value={tri_e_form.tri_e_s22} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo23" type="text" name="tri_e_s23" value={tri_e_form.tri_e_s23} onChange={tri_e_handleChange} />
                    <input className="tri_e_fo24" type="text" name="tri_e_s24" value={tri_e_form.tri_e_s24} onChange={tri_e_handleChange} />
                </form>
                <section className="triplesevent_imgt tri_e_i_1">
                    <img src={TriEventS1} alt="윤서연 이미지" />
                    <img src={TriEventS2} alt="정혜린 이미지" />
                    <img src={TriEventS3} alt="이지우 이미지" />
                    <img src={TriEventS4} alt="김채연 이미지" />
                </section>
                <section className="triplesevent_imgt tri_e_i_2">
                    <img src={TriEventS5} alt="김유연 이미지" />
                    <img src={TriEventS6} alt="김수민 이미지" />
                    <img src={TriEventS7} alt="김나경 이미지" />
                    <img src={TriEventS8} alt="공유빈 이미지" />
                </section>
                <section className="triplesevent_imgt tri_e_i_3">
                    <img src={TriEventS9} alt="카에데 이미지" />
                    <img src={TriEventS10} alt="서다현 이미지" />
                    <img src={TriEventS11} alt="코토네 이미지" />
                    <img src={TriEventS12} alt="곽연지 이미지" />
                </section>
                <section className="triplesevent_imgt tri_e_i_4">
                    <img src={TriEventS13} alt="니엔 이미지" />
                    <img src={TriEventS14} alt="박소현 이미지" />
                    <img src={TriEventS15} alt="신위 이미지" />
                    <img src={TriEventS16} alt="마유 이미지" />
                </section>
                <section className="triplesevent_imgt tri_e_i_5">
                    <img src={TriEventS17} alt="린 이미지" />
                    <img src={TriEventS18} alt="주빈 이미지" />
                    <img src={TriEventS19} alt="정하연 이미지" />
                    <img src={TriEventS20} alt="박시온 이미지" />
                </section>
                <section className="triplesevent_imgt tri_e_i_6">
                    <img src={TriEventS21} alt="김채원 이미지" />
                    <img src={TriEventS22} alt="설린 이미지" />
                    <img src={TriEventS23} alt="서아 이미지" />
                    <img src={TriEventS24} alt="지연 이미지" />
                </section>
            </section>
            <button className="tri_e_btn">제출하기</button>
        </div>
    );
};
