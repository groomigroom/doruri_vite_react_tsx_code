import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ResMemMinami.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import res_mm_minami_img from '../main/img/rescene_m_mem_Minami.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemMinami() {
    return (
        <div className="res_mm_minami_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ResMemMinami' className="on">한국어</Link>
                <Link to='/ResMemMinamiEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="리센느 꾸미기" />미나미<img src={MainH2Deco} alt="리센느 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                근성과 끈기로<br />
                더 노력해서<br />
                여러분을 만나러 갈게요!</p>
            <img src={res_mm_minami_img} alt="미나미 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 11월 29일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>미남이</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>밍</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>바다표범</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>정이 많음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 더뮤즈엔터테인먼트' />
        </div>
    );

};

