import { Link } from 'react-router-dom';

import '../../../triples/members/TriplesMemS1.css';
import '../../../txt/members/TxtMemYeonjun.css';

import MenuEng from '../../../HomeEng/MenuEng';

import Txt_mm_Yeonjun_img from '../../../txt/main/img/txt_m_mem_yeonjun.jpg';

import MainH2Deco from '../../../img/main_h2_deco.png';

export default function TxtMemYeonjun_7_22_endEng() {
    return (
        <div className="txt_mm_yeonjun_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMemYeonjun_7_22_end'>한국어</Link>
                <Link to='/TxtMemYeonjun_7_22_endEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="txt deco" />Yeonjun<img src={MainH2Deco} alt="txt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll work hard every day<br />
                I'm going to get ready<br />
                I'll be back to you!</p>
            <img src={Txt_mm_Yeonjun_img} alt="Yeonjun img" className='tri_mm_s1_img txt_mm_yeonjun_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 9월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>181.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>연또</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>춤추기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>춤</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td>
                            <p>ESTP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
