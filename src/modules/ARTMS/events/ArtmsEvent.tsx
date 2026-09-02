import { useState } from 'react';
import { Link } from "react-router-dom";
import { DoruriDocumentTitle } from "../../DoruriDocumentTitle";

import '../../triples/main/TriplesMain.css';
import '../../triples/events/TriplesEvent.css';
import './ArtmsEvent.css';

import Menu from "../../Menu";

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtmsEvent() {
    DoruriDocumentTitle('ARTMS 이벤트');

    const [artms_e_correct_arr, SetArtms_e_correct_arr] = useState<string[]>([]);

    const [artms_e_before_arr, SetArtms_e_before_arr] = useState<string[]>([
        '3번', '2번', '4번', '1번', '5번'
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

    let artms_e_correct_all = artms_e_correct_arr[0] === '1번' && artms_e_correct_arr[1] === '2번' && artms_e_correct_arr[2] === '3번'
        && artms_e_correct_arr[3] === '4번' && artms_e_correct_arr[4] === '5번';

    return (
        <div className="ArtmsEvent_full">
            <header className="tri_m_header">
                <Menu />
                <section className="home_translate">
                    <Link to='/ArtmsEvent' className="on">한국어</Link>
                    <Link to='/ArtmsEventEng'>English</Link>
                </section>
            </header>
            <section className="tri_e_logo">
                <img src={""} alt="ARTMSELogo" />
            </section>
            <section className="tri_m_h2">
                <h2>
                    <img src={MainH2Deco} alt="ARTMS" />멤버 이름 가나다 순서로 정렬하기 이벤트<img src={MainH2Deco} alt="ARTMS" />
                </h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    &apos;ARTMS&apos; 멤버들의<br />
                    이름을 가나다 순서대로<br />
                    정렬해 주세요!
                </p>
            </section>
            <section className="tri_m_h2">
                <h2>▪ 정답 정렬칸 ▪</h2>
            </section>
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
