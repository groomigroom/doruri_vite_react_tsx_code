import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AesMemNingning.css';

import Menu from '../../Menu';

import Aes_mm_Ningning_img from '../main/img/aespa_m_mem_Ningning.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemNingning() {
    return (
        <div className="aes_mm_ningning_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AesMemNingning' className="on">한국어</Link>
                <Link to='/AesMemNingningEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa 꾸미기" />닝닝<img src={MainH2Deco} alt="aespa 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                솔직하게<br />
                제 개성을 여러분께<br />
                보여 드릴게요!</p>
            <img src={Aes_mm_Ningning_img} alt="닝닝 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2002년 10월 23일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>전투 스킬</p></td>
                        <td><p>E.D Hacker</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>뤠</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td>
                            <p>닝</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>솔직함</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );

};
