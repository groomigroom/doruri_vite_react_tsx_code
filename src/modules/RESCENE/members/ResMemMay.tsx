import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ResMemMay.css';

import Menu from '../../Menu';

import res_mm_may_img from '../main/img/rescene_m_mem_May.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemMay() {
    return (
        <div className="res_mm_may_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ResMemMay' className="on">한국어</Link>
                <Link to='/ResMemMayEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="리센느 꾸미기" />메이<img src={MainH2Deco} alt="리센느 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                조용하지만<br />
                섬세한 성격으로<br />
                멤버들과 잘 지내 볼게요!</p>
            <img src={res_mm_may_img} alt="메이 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2008년 8월 19일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>157cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>메트</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>얌</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>코끼리</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>착함</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};

