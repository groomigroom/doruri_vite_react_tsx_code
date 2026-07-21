import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './StrayMemSeungmin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Str_mm_seungmin_img from '../main/img/stray_m_mem_Seungmin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';


export default function StrayMemSeungmin() {
    return (
        <div className="str_mm_seungmin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/StrayMemSeungmin' className="on">한국어</Link>
                <Link to='/StrayMemSeungminEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" />승민<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                다정하고<br />
                따뜻한 마음으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Str_mm_seungmin_img} alt="승민 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 9월 22일</p></td>
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
                        <td><p>ESFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>댕댕이</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>퍼핌</p></td>
                    </tr>
                    <tr>
                        <td><p>상징 동물</p></td>
                        <td><p>강아지</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td>
                            <p>메인 보컬</p></td>
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
}
