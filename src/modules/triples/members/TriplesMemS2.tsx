import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS2.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s2_img from '../main/img/tri_m_memS2.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS2() {
    return (
        <div className="tri_mm_s2_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS2' className="on">한국어</Link>
                <Link to='/TriplesMemS2Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />정혜린<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                열심히 준비했고,<br />
                저의 전부를 음악으로<br />
                들려 드릴게요!
            </p>
            <img src={Tri_mm_s2_img} alt="정혜린 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 4월 12일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>리네</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>노래 듣기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>과자 던져먹기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>떡볶이</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                Acid Angel from Asia, Acid Eyes, LOVElution, Visionary Vision, sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>완벽?!</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );

};
