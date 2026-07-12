import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS7.css';

import Menu from '../../Menu';

import Tri_mm_s7_img from '../main/img/tri_m_memS7.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS7() {
    return (
        <div className="tri_mm_s7_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS7' className="on">한국어</Link>
                <Link to='/TriplesMemS7Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />김나경<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                여린 마음이 있지만<br />
                그래도 씩씩하게<br />
                여러분께 찾아 갈게요!</p>
            <img src={Tri_mm_s7_img} alt="김나경 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 10월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>166cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>Naky</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>잠자기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>라면 끓이기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>매운 음식</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                Acid Angel from Asia, Acid Eyes, <br />
                                EVOLution, Visionary Vision, neptune</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>여림</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};











