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

    const artms_e_correct_append = () => {
        if (artms_e_correct_arr.length !== 5 || artms_e_before_arr.length !== 0) {
            SetArtms_e_correct_arr([...artms_e_correct_arr, artms_e_before_arr[0]]);
            SetArtms_e_before_arr(artms_e_before_arr.toSpliced(0, 1));
        }
    };

    const [artms_e_correct_arr_ins_num, SetArtms_e_correct_arr_ins_num] = useState<string>("");

    const artms_e_correct_arr_ins_num_change = (e: React.ChangeEvent<HTMLInputElement>) => {
        SetArtms_e_correct_arr_ins_num(e.target.value);
    };

    const artms_e_correct_insert = () => {
        if (artms_e_correct_arr.length !== 5 || artms_e_before_arr.length !== 0) {
            SetArtms_e_correct_arr(artms_e_correct_arr.toSpliced(parseInt(artms_e_correct_arr_ins_num) - 1, 0, artms_e_before_arr[0]));
            SetArtms_e_before_arr(artms_e_before_arr.toSpliced(0, 1));
        }
    };

    const artms_e_correct_pop = () => {
        if (artms_e_correct_arr.length !== 0) {
            SetArtms_e_before_arr([...artms_e_before_arr, artms_e_correct_arr[artms_e_correct_arr.length - 1]]);
            SetArtms_e_correct_arr(artms_e_correct_arr.toSpliced(artms_e_correct_arr.length - 1, 1));
        }
    };

    let artms_e_correct_all = artms_e_correct_arr[0] === '구름' && artms_e_correct_arr[1] === '구름구름' && artms_e_correct_arr[2] === '구름이'
        && artms_e_correct_arr[3] === '멍멍이' && artms_e_correct_arr[4] === '비숑';

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
                <div>{artms_e_correct_arr[0]}</div>
                <div>{artms_e_correct_arr[1]}</div>
                <div>{artms_e_correct_arr[2]}</div>
                <div>{artms_e_correct_arr[3]}</div>
                <div>{artms_e_correct_arr[4]}</div>
            </section>
            <button className='artms_e_correct_arr_append' onClick={artms_e_correct_append}>뒤에 추가하기</button>
            <input className='artms_e_correct_arr_ins_num' type="text" name="artms_e_correct_arr_ins_num" value={artms_e_correct_arr_ins_num} onChange={artms_e_correct_arr_ins_num_change} />
            <button className='artms_e_correct_arr_insert' onClick={artms_e_correct_insert}>사이에 삽입하기</button>
            <button className='artms_e_correct_arr_pop' onClick={artms_e_correct_pop}>사이에서 삭제하기</button>
            <h2 className="tri_e_h2 artms_e_h2_3">▪ 기존 배열칸?? ▪</h2>
            <section className="artms_e_array artms_e_before_array">
                <div>{artms_e_before_arr[0]}</div>
                <div>{artms_e_before_arr[1]}</div>
                <div>{artms_e_before_arr[2]}</div>
                <div>{artms_e_before_arr[3]}</div>
                <div>{artms_e_before_arr[4]}</div>
            </section>
            {artms_e_correct_all && (
                <section className='artms_e_real_result'>
                    <p>당첨</p>
                </section>
            )}
        </div>
    );
}
