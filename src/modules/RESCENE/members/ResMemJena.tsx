import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ResMemJena.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import res_mm_jena_img from '../main/img/rescene_m_mem_Jena.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemJena() {
    return (
        <div className="res_mm_jena_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ResMemJena' className="on">한국어</Link>
                <Link to='/ResMemJenaEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="리센느 꾸미기" />제나<img src={MainH2Deco} alt="리센느 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                낯을 많이 가리지만<br />
                그래도 멤버들과 함께<br />
                열심히 활동해 볼게요!</p>
            <img src={res_mm_jena_img} alt="제나 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2008년 11월 27일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>신라공주</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>쩨로밍</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>다람쥐</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>웃긴 표정 짓기</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>낯가림</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 더뮤즈엔터테인먼트' />
        </div>
    );

};

