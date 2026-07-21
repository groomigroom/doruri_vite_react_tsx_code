import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemIn.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_mm_in_img from '../main/img/stray_m_mem_In.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemIn() {
    return (
        <div className="str_mm_in_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemIn' className="on">한국어</Link>
                <Link to='/StrayMemInEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />아이엔<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                성실하고 계획적으로<br />
                잘 준비해서<br />
                여러분을 찾아 갈게요!</p>
            <img src={Str_mm_in_img} alt="아이엔 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2001년 2월 8일</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>이엔이</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>폭시니</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>사막여우</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>보컬</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>계획적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
}
