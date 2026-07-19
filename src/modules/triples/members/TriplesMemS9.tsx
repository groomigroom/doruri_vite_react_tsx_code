import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS9.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s9_img from '../main/img/tri_m_memS9.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS9() {
    return (
        <div className="tri_mm_s9_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS9' className="on">한국어</Link>
                <Link to='/TriplesMemS9Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />카에데<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                밝고 쾌할한 성격과<br />
                따뜻한 마음으로<br />
                여러분께 찾아 갈게요!</p>
            <img src={Tri_mm_s9_img} alt="카에데 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 12월 20일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>159cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>카에</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>게임</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>집중력</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>보쌈</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                LOVElution, Aria, <br />
                                Visionary Vision, moon</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );

};














