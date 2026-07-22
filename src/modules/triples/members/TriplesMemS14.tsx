import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS14.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s14_img from '../main/img/tri_m_memS14.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS14() {
    return (
        <div className="tri_mm_s14_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS14' className="on">한국어</Link>
                <Link to='/TriplesMemS14Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />박소현<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                창작 활동을 좋아해서<br />
                곡도 쓰고 춤도 창작하며<br />
                활동해 볼게요!</p>
            <img src={Tri_mm_s14_img} alt="박소현 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 10월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>167.3cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>박쌤</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>독서</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>글쓰기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>떡볶이</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                LOVElution, Visionary Vision, <br />
                                moon</p></td>
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

















