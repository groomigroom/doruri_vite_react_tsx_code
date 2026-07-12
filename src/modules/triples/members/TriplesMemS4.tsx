import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS4.css';

import Menu from '../../Menu';

import Tri_mm_s4_img from '../main/img/tri_m_memS4.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS4() {
    return (
        <div className="tri_mm_s4_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS4' className="on">한국어</Link>
                <Link to='/TriplesMemS4Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />김채연<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                새로운 도전하는 마음으로<br />
                더 빛나는 제 모습을<br />
                보여 드릴게요!</p>
            <img src={Tri_mm_s4_img} alt="김채연 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 12월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>170.8cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>채욤미</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>영화보기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>연기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>차돌박이</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                +&#40;KR&#41;ystal Eyes, Acid Eyes, <br />
                                EVOLution, Aria, ∞!, sun</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};




