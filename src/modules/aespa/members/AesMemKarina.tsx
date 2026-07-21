import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AesMemKarina.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Aes_mm_Karina_img from '../main/img/aespa_m_mem_Karina.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemKarina() {
    return (
        <div className="aes_mm_karina_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AesMemKarina' className="on">한국어</Link>
                <Link to='/AesMemKarinaEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa 꾸미기" />카리나<img src={MainH2Deco} alt="aespa 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                세심하고<br />
                다정한 마음으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Aes_mm_Karina_img} alt="카리나 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 4월 11일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리더, 보컬, 댄스, 래퍼</p></td>
                    </tr>
                    <tr>
                        <td><p>전투 스킬</p></td>
                        <td><p>Rocket Puncher</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>카랑이</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td>
                            <p>찌민</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );

};
