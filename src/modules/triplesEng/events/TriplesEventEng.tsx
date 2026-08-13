import { useState } from "react";
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";
import { EngPage } from "../../HomeEng/EngPage";

// import TriplesEventPre from "./TriplesEventPre";

import MenuEng from "../../HomeEng/MenuEng";
import FooterPartEng from "../../FooterPartEng";

import MainH2Deco from '../../img/main_h2_deco.png';

import "../../triples/events/TriplesEvent.css";
// import TriEventLogo from "./img/tri_events_logo.png";
// import TriEventS1 from "../main/img/tri_m_memS1.jpg";
// import TriEventS2 from "../main/img/tri_m_memS2.jpg";
// import TriEventS3 from "../main/img/tri_m_memS3.jpg";
// import TriEventS4 from "../main/img/tri_m_memS4.jpg";
// import TriEventS5 from "../main/img/tri_m_memS5.jpg";
// import TriEventS6 from "../main/img/tri_m_memS6.jpg";
// import TriEventS7 from "../main/img/tri_m_memS7.jpg";
// import TriEventS8 from "../main/img/tri_m_memS8.jpg";
// import TriEventS9 from "../main/img/tri_m_memS9.jpg";
// import TriEventS10 from "../main/img/tri_m_memS10.jpg";
// import TriEventS11 from "../main/img/tri_m_memS11.jpg";
// import TriEventS12 from "../main/img/tri_m_memS12.jpg";
// import TriEventS13 from "../main/img/tri_m_memS13.jpg";
// import TriEventS14 from "../main/img/tri_m_memS14.jpg";
// import TriEventS15 from "../main/img/tri_m_memS15.jpg";
// import TriEventS16 from "../main/img/tri_m_memS16.jpg";
// import TriEventS17 from "../main/img/tri_m_memS17.jpg";
// import TriEventS18 from "../main/img/tri_m_memS18.jpg";
// import TriEventS19 from "../main/img/tri_m_memS19.jpg";
// import TriEventS20 from "../main/img/tri_m_memS20.jpg";
// import TriEventS21 from "../main/img/tri_m_memS21.jpg";
// import TriEventS22 from "../main/img/tri_m_memS22.jpg";
// import TriEventS23 from "../main/img/tri_m_memS23.jpg";
// import TriEventS24 from "../main/img/tri_m_memS24.jpg";


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

export default function TriplesEventEng() {
    DoruriDocumentTitle('tripleS event');
    EngPage('en', 'ko');

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
    if (tri_e_form.tri_e_s1 === "Yoon SeoYeon") tri_e_result++;
    if (tri_e_form.tri_e_s2 === "Jeong HyeRin") tri_e_result++;
    if (tri_e_form.tri_e_s3 === "Lee JiWoo") tri_e_result++;
    if (tri_e_form.tri_e_s4 === "Kim ChaeYeon") tri_e_result++;
    if (tri_e_form.tri_e_s5 === "Kim YooYeon") tri_e_result++;
    if (tri_e_form.tri_e_s6 === "Kim SooMin") tri_e_result++;
    if (tri_e_form.tri_e_s7 === "Kim NaKyoung") tri_e_result++;
    if (tri_e_form.tri_e_s8 === "Gong YuBin") tri_e_result++;
    if (tri_e_form.tri_e_s9 === "Kaede") tri_e_result++;
    if (tri_e_form.tri_e_s10 === "Seo DaHyun") tri_e_result++;
    if (tri_e_form.tri_e_s11 === "Kotone") tri_e_result++;
    if (tri_e_form.tri_e_s12 === "Kwak YeonJi") tri_e_result++;
    if (tri_e_form.tri_e_s13 === "Nien") tri_e_result++;
    if (tri_e_form.tri_e_s14 === "Park SoHyun") tri_e_result++;
    if (tri_e_form.tri_e_s15 === "Xinyu") tri_e_result++;
    if (tri_e_form.tri_e_s16 === "Mayu") tri_e_result++;
    if (tri_e_form.tri_e_s17 === "Lynn") tri_e_result++;
    if (tri_e_form.tri_e_s18 === "JooBin") tri_e_result++;
    if (tri_e_form.tri_e_s19 === "Jeong HaYeon") tri_e_result++;
    if (tri_e_form.tri_e_s20 === "Park ShiOn") tri_e_result++;
    if (tri_e_form.tri_e_s21 === "Kim ChaeWon") tri_e_result++;
    if (tri_e_form.tri_e_s22 === "Sullin") tri_e_result++;
    if (tri_e_form.tri_e_s23 === "SeoAh") tri_e_result++;
    if (tri_e_form.tri_e_s24 === "JiYeon") tri_e_result++;

    const [tri_e_PopupO, tri_e_SetPopupO] = useState<boolean>(false);
    const tri_e_OpPopup = () => {
        tri_e_SetPopupO(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 올라가려면 'smooth', 즉시 이동하려면 'auto'
        });
    };
    //const tri_e_OpPopup = () => tri_e_SetPopupO(true);
    const tri_e_ClPopup = () => tri_e_SetPopupO(false);

    console.log(tri_e_result);

    return (
        <div className="triplesevent_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesEvent'>한국어</Link>
                <Link to='/TriplesEventEng' className="on">English</Link>
            </section>
            <img src="" alt="" className="tri_e_toback" />
            <img src={TriEventLogo} alt="tripleS event logo" className="tri_e_logo" />
            <h2 className="tri_e_h2"><img src={MainH2Deco} alt="tripleS" />Guess the name event<img src={MainH2Deco} alt="tripleS" /></h2>
            <p className='tri_e_intropp'>
                Guess all the names<br />
                of the<br />
                &apos;tripleS&apos; members!
            </p>
            <section className="tri_e_img">
                <form className="tri_e_form" action="">
                    <section className="tri_e_form_indivtr tri_e_form_indivtr1">
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo1" type="text" name="tri_e_s1" value={tri_e_form.tri_e_s1} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo2" type="text" name="tri_e_s2" value={tri_e_form.tri_e_s2} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo3" type="text" name="tri_e_s3" value={tri_e_form.tri_e_s3} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo4" type="text" name="tri_e_s4" value={tri_e_form.tri_e_s4} onChange={tri_e_handleChange} />
                        </div>
                    </section>
                    <section className="tri_e_form_indivtr tri_e_form_indivtr2">
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo5" type="text" name="tri_e_s5" value={tri_e_form.tri_e_s5} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo6" type="text" name="tri_e_s6" value={tri_e_form.tri_e_s6} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo7" type="text" name="tri_e_s7" value={tri_e_form.tri_e_s7} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo8" type="text" name="tri_e_s8" value={tri_e_form.tri_e_s8} onChange={tri_e_handleChange} />
                        </div>
                    </section>
                    <section className="tri_e_form_indivtr tri_e_form_indivtr3">
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo9" type="text" name="tri_e_s9" value={tri_e_form.tri_e_s9} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo10" type="text" name="tri_e_s10" value={tri_e_form.tri_e_s10} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo11" type="text" name="tri_e_s11" value={tri_e_form.tri_e_s11} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo12" type="text" name="tri_e_s12" value={tri_e_form.tri_e_s12} onChange={tri_e_handleChange} />
                        </div>
                    </section>
                    <section className="tri_e_form_indivtr tri_e_form_indivtr4">
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo13" type="text" name="tri_e_s13" value={tri_e_form.tri_e_s13} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo14" type="text" name="tri_e_s14" value={tri_e_form.tri_e_s14} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo15" type="text" name="tri_e_s15" value={tri_e_form.tri_e_s15} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo16" type="text" name="tri_e_s16" value={tri_e_form.tri_e_s16} onChange={tri_e_handleChange} />
                        </div>
                    </section>
                    <section className="tri_e_form_indivtr tri_e_form_indivtr5">
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo17" type="text" name="tri_e_s17" value={tri_e_form.tri_e_s17} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo18" type="text" name="tri_e_s18" value={tri_e_form.tri_e_s18} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo19" type="text" name="tri_e_s19" value={tri_e_form.tri_e_s19} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo20" type="text" name="tri_e_s20" value={tri_e_form.tri_e_s20} onChange={tri_e_handleChange} />
                        </div>
                    </section>
                    <section className="tri_e_form_indivtr tri_e_form_indivtr6">
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo21" type="text" name="tri_e_s21" value={tri_e_form.tri_e_s21} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo22" type="text" name="tri_e_s22" value={tri_e_form.tri_e_s22} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo23" type="text" name="tri_e_s23" value={tri_e_form.tri_e_s23} onChange={tri_e_handleChange} />
                        </div>
                        <div className="tri_e_form_indiv">
                            <input className="tri_e_fo24" type="text" name="tri_e_s24" value={tri_e_form.tri_e_s24} onChange={tri_e_handleChange} />
                        </div>
                    </section>
                </form>
                <section className="triplesevent_imgt tri_e_i_1">
                    <img src={TriEventS1} alt="Yoon SeoYeon" />
                    <img src={TriEventS2} alt="Jeong HyeRin" />
                    <img src={TriEventS3} alt="Lee JiWoo" />
                    <img src={TriEventS4} alt="Kim ChaeYeon" />
                </section>
                <section className="triplesevent_imgt tri_e_i_2">
                    <img src={TriEventS5} alt="Kim YooYeon" />
                    <img src={TriEventS6} alt="Kim SooMin" />
                    <img src={TriEventS7} alt="Kim NaKyoung" />
                    <img src={TriEventS8} alt="Gong YuBin" />
                </section>
                <section className="triplesevent_imgt tri_e_i_3">
                    <img src={TriEventS9} alt="Kaede" />
                    <img src={TriEventS10} alt="Seo DaHyun" />
                    <img src={TriEventS11} alt="Kotone" />
                    <img src={TriEventS12} alt="Kwak YeonJi" />
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
            <button className="tri_e_btn" onClick={tri_e_OpPopup}>제출하기</button>
            {tri_e_PopupO && (
                <TriplesEventPre tri_e_OnCl={tri_e_ClPopup} tri_e_result={tri_e_result} />
            )}
            <FooterPartEng FooterPartEngText='ⓒ Modhaus' />
        </div>
    );
};
