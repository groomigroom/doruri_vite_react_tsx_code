import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS13.css';

import Menu from '../../Menu';

import Tri_mm_s13_img from '../main/img/tri_m_memS13.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS13() {
    return (
        <div className="tri_mm_s13_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS13' className="on">한국어</Link>
                <Link to='/TriplesMemS13Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />니엔<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                결정을 쉽게 내리며<br />
                정이 넘치는 마음으로<br />
                멤버들과 잘 지내 볼게요!</p>
            <img src={Tri_mm_s13_img} alt="니엔 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2003년 6월 2일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>169cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>낸시</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>드라마 보기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>춤추기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>비빔밥</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                LOVElution, Aria, Visionary Vision, <br />
                                Alphie, neptune</p></td>
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

















