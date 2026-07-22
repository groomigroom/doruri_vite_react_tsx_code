import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS19.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s19_img from '../main/img/tri_m_memS19.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS19() {
    return (
        <div className="tri_mm_s19_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS19' className="on">한국어</Link>
                <Link to='/TriplesMemS19Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />정하연<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                자유롭고<br />
                적극적인 마음으로<br />
                여러분께 찾아 갈게요!</p>
            <img src={Tri_mm_s19_img} alt="정하연 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 8월 1일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>고슴도치</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>글쓰기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>돌고래 소리 내기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>해산물</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                NXT, Alphie, zenith</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>자유분방함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};

















