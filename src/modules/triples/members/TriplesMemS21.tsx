import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS21.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s21_img from '../main/img/tri_m_memS21.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS21() {
    return (
        <div className="tri_mm_s21_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS21' className="on">한국어</Link>
                <Link to='/TriplesMemS21Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />김채원<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                독보적으로<br />
                통통튀는 성격으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Tri_mm_s21_img} alt="김채원 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 5월 2일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>꼬북이</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>독서</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>특공 무술</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>마라탕</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                Glow, ∞!, <br />
                                Alphie, sun</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>독보적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};

















