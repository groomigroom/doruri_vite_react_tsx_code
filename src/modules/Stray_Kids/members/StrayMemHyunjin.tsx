import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemHyunjin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_mm_hyunjin_img from '../main/img/stray_m_mem_Hyunjin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemHyunjin() {
    return (
        <div className="str_mm_hyunjin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemHyunjin' className="on">한국어</Link>
                <Link to='/StrayMemHyunjinEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />현진<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다정한 마음과<br />
                진지한 마음으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Str_mm_hyunjin_img} alt="현진 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 3월 20일</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>현이</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>지니렛</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>흰족제비</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>메인 댄서</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div>
    );
}
