import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IllMemMinju.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import ill_mm_minju_img from '../main/img/illit_m_mem_Minju.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemMinju() {
    return (
        <div className="ill_mm_minju_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IllMemMinju' className="on">한국어</Link>
                <Link to='/IllMemMinjuEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit 로고 꾸미기" />민주<img src={MainH2Deco} alt="illit 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                멤버들을 배려하며<br />
                멤버들과<br />
                잘 지내 볼게요!</p>
            <img src={ill_mm_minju_img} alt="민주 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2004년 5월 11일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>캐릭터</p></td>
                        <td><p>오끼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTJ-A</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>쭈</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>컬러링북 꾸미기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td>
                            <p>바이올린</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>감성적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};

