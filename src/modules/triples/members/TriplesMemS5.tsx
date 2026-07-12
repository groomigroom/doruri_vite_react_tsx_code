import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS5.css';

import Menu from '../../Menu';

import Tri_mm_s5_img from '../main/img/tri_m_memS5.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS5() {
    return (
        <div className="tri_mm_s5_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS5' className="on">한국어</Link>
                <Link to='/TriplesMemS5Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />김유연<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다른 멤버들을<br />
                잘 챙기면서 더 발전하는<br />
                모습을 보여 드릴게요!</p>
            <img src={Tri_mm_s5_img} alt="김유연 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2001년 2월 9일</p></td>
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
                        <td><p>이대다니는 애?</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>스키</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>엔딩요정</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>스시</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                Acid Angel from Asia, Acid Eyes, <br />
                                EVOLution, Visionary Vision, ∞!, Alphie, sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>침착함</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};






