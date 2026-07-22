import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS22.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s22_img from '../main/img/tri_m_memS22.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS22() {
    return (
        <div className="tri_mm_s22_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS22' className="on">한국어</Link>
                <Link to='/TriplesMemS22Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />설린<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                온화하고<br />
                차분한 마음으로<br />
                여러뷴을 찾아 갈게요!</p>
            <img src={Tri_mm_s22_img} alt="설린 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 11월 30일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>170cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>타이공주</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>컴퓨터 게임</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>영어 말하기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>태국 음식</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                Glow, moon</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>차분함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};

















