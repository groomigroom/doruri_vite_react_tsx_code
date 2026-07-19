import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS8.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s8_img from '../main/img/tri_m_memS8.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS8() {
    return (
        <div className="tri_mm_s8_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS8' className="on">한국어</Link>
                <Link to='/TriplesMemS8Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />공유빈<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                제가 맡은 역할에<br />
                최선을 다하며<br />
                &apos;트리플에스&apos;로서 활동 할게요!</p>
            <img src={Tri_mm_s8_img} alt="공유빈 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 2월 3일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>공유밤</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>양모펠트</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>요리</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>고기</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                Acid Angel from Asia, Acid Eyes, <br />
                                LOVElution, Visionary Vision, zenith</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>냉철함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );

};












