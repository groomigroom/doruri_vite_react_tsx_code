import { Link } from 'react-router-dom';

import './TriplesMemS1.css';
import './TriplesMemS18.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Tri_mm_s18_img from '../main/img/tri_m_memS18.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS18() {
    return (
        <div className="tri_mm_s18_full">
            <Menu />
            <section className="home_translate">
                <Link to='/TriplesMemS18' className="on">한국어</Link>
                <Link to='/TriplesMemS18Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="트리플에스 로고 꾸미기" />주빈<img src={MainH2Deco} alt="트리플에스 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                흔하지 않은<br />
                개성을 담아서<br />
                여러분께 찾아 갈게요!</p>
            <img src={Tri_mm_s18_img} alt="주빈 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2009년 1월 16일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>169cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>비니</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>음악 듣기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>사진 찍어주기</p></td>
                    </tr>
                    <tr>
                        <td><p>좋아하는 음식</p></td>
                        <td><p>빵</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td>
                            <p>
                                NXT, zenith</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>지적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};

















