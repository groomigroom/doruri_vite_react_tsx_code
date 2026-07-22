import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS15.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s15_img from '../main/img/tri_m_memS15.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS15() {
    return (
        <div className="tri_mm_s15_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS15' className="on">한국어</Link>
                <Link to='/TriplesMemS15Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />신위<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                적극적으로<br />
                깊은 배려심과 함께<br />
                여러분께 찾아 갈게요!</p>
            <img src={Tri_mm_s15_img} alt="신위 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 5월 25일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>174cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>여신위</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>영화 보기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>춤</p></td>
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
                                sun</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>적극적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};

















