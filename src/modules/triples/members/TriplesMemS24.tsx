import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS24.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s24_img from '../main/img/tri_m_memS24.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS24() {
    return (
        <div className="tri_mm_s24_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS24' className="on">한국어</Link>
                <Link to='/TriplesMemS24Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />지연<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                깔끔하게 정리하고<br />
                깊은 생각을 가지고<br />
                여러분을 찾아 갈게요!</p>
            <img src={Tri_mm_s24_img} alt="지연 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 2월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>167cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>백조</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>글쓰기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>발레</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>아보카도</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                Glow, Visionary Vision, <br />
                                Alphie, moon</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>사교적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};

















