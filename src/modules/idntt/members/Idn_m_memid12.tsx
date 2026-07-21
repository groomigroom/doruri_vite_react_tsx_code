import { Link } from 'react-router-dom';

import './Idn_m_memid12.css';

import Menu from '../../Menu';

// import Idn_mm_memid11_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid12() {
    return (
        <div className="idn_mm_id12_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid12' className="on">한국어</Link>
                <Link to='/Idn_m_memid12Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />박누리<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                끊임없이<br />
                도전하며 &apos;idntt&apos;<br />
                활동을 준비해 볼게요!
            </p>
            <img src='' alt="박누리 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2008년 12월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>182cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>yesweare</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#fdd82e</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>순함</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>??</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};













