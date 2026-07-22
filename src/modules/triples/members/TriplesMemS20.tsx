import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS20.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s20_img from '../main/img/tri_m_memS20.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS20() {
    return (
        <div className="tri_mm_s20_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS20' className="on">한국어</Link>
                <Link to='/TriplesMemS20Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />박시온<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                차분하지만<br />
                주변과 잘 조화되는 성격으로<br />
                &apos;트리플에스&apos; 활동해 볼게요!</p>
            <img src={Tri_mm_s20_img} alt="박시온 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 4월 3일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>167cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>빵시온</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>맛집 탐방</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>영상 편집</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>웬만한 음식 다</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                NXT, ∞!, <br />
                                Alphie, moon</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>계획적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};

















