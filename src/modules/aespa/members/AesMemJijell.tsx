import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AesMemJijell.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Aes_mm_Jijell_img from '../main/img/aespa_m_mem_Jijel.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemJijell() {
    return (
        <div className="aes_mm_jijell_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AesMemJijell' className="on">한국어</Link>
                <Link to='/AesMemJijellEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa 꾸미기" />지젤<img src={MainH2Deco} alt="aespa 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                즐거운 마음으로<br />
                활발하게 &apos;aespa&apos;<br />
                멤버로 활동해 볼게요!</p>
            <img src={Aes_mm_Jijell_img} alt="지젤 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 10월 30일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>164cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>보컬, 래퍼</p></td>
                    </tr>
                    <tr>
                        <td><p>전투 스킬</p></td>
                        <td><p>Xenoglossy</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>젤블냥이</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td>
                            <p>지구젤리</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );

};

