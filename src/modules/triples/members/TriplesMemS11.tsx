import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS11.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s11_img from '../main/img/tri_m_memS11.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS11() {
    return (
        <div className="tri_mm_s11_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS11' className="on">한국어</Link>
                <Link to='/TriplesMemS11Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />코토네<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                적극적으로<br />
                멤버들과 함께 새로운 음악<br />
                작업을 추진해 볼게요!</p>
            <img src={Tri_mm_s11_img} alt="코토네 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 3월 10일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>코토</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>잠자기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>빠르게 인공 눈물하기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>떡갈비</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                EVOLution, Visionary Vision, <br />
                                ∞!, Alphie, neptune</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>사교적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );

};

















