import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AesMemNingning.css';

import Menu from '../../Menu';

// import Txt_mm_Beomgyu_img from '../main/img/txt_m_mem_beomgyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AesMemWinter() {
    return (
        <div className="aes_mm_winter_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AesMemWinter' className="on">한국어</Link>
                <Link to='/AesMemWinterEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="aespa 꾸미기" />윈터<img src={MainH2Deco} alt="aespa 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                즐거운 마음으로<br />
                노래하며<br />
                여러분을 찾아 갈게요!</p>
            <img src="" alt="윈터 이미지" className='tri_mm_s1_img txt_mm_beomgyu_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2001년 1월 1일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>보컬, 댄스</p></td>
                    </tr>
                    <tr>
                        <td><p>전투 스킬</p></td>
                        <td><p>Armamenter</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>뭉탱이</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td>
                            <p>겨울이</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );

};
