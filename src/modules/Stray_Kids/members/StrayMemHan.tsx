import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemHan.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_mm_han_img from '../main/img/stray_m_mem_Han.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemHan() {
    return (
        <div className="str_mm_han_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemHan' className="on">한국어</Link>
                <Link to='/StrayMemHanEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />한<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                긍정적인 성격과 함께<br />
                멤버들을 챙기며<br />
                여러분을 찾아 갈게요!</p>
            <img src={Str_mm_han_img} alt="한 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 9월 14일</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>3RACHA</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>쿼카</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>한쿼카</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>쿼카</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>메인 래퍼</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );
}
