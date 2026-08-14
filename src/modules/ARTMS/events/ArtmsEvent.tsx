import { useState } from 'react';
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/events/TriplesEvent.css';
import './ArtmsEvent.css';

import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtmsEvent() {
    DoruriDocumentTitle('ARTMS 이벤트');

    const [artms_e_correct_arr, SetArtms_e_correct_arr] = useState<string[]>([]);

    const [artms_e_before_arr, SetArtms_e_before_arr] = useState<string[]>([
        '구름', '멍멍이', '비숑', '구름구름', '구름이'
    ]);

    return (
        <div className="ArtmsEvent_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ArtmsEvent' className="on">한국어</Link>
                <Link to='/ArtmsEventEng'>English</Link>
            </section>
            <img src={""} alt="ARTMSELogo" className="tri_e_logo" />
            <h2 className="tri_e_h2">
                <img src={MainH2Deco} alt="ARTMS" />배열 이벤트??<img src={MainH2Deco} alt="ARTMS" />
            </h2>
            <p className='tri_e_intropp'>
                ㅌㅌㅌㅌ<br />
                ㅌㅌㅌㅌ<br />
                ㅌㅌㅌㅌ
            </p>
            <h2 className="tri_e_h2 artms_e_h2_2">▪ 정답 배열칸??? ▪</h2>
            <section className="artms_e_array artms_e_correct_array">
                <div>{""}</div>
                <div>{""}</div>
                <div>{""}</div>
                <div>{""}</div>
                <div>{""}</div>
            </section>
            <h2 className="tri_e_h2 artms_e_h2_3">▪ 기존 배열칸?? ▪</h2>
            <section className="artms_e_array artms_e_before_array">
                <div>{artms_e_before_arr[0]}</div>
                <div>{artms_e_before_arr[1]}</div>
                <div>{artms_e_before_arr[2]}</div>
                <div>{artms_e_before_arr[3]}</div>
                <div>{artms_e_before_arr[4]}</div>
            </section>
        </div>
    );
}
