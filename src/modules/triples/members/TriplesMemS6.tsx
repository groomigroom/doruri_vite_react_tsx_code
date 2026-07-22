import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS6.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s6_img from '../main/img/tri_m_memS6.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS6() {
    return (
        <div className="tri_mm_s6_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS6' className="on">한국어</Link>
                <Link to='/TriplesMemS6Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />김수민<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                기대하는 마음으로<br />
                합류하게 된 &apos;트리플에스&apos;에서<br />
                열심히 활동 할게요!</p>
            <img src={Tri_mm_s6_img} alt="김수민 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 10월 3일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>애깅</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>영화 관람</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>말하기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>떡볶이</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                +&#40;KR&#41;ystal Eyes, Acid Eyes, <br />
                                EVOLution, ∞!, zenith</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );

};









