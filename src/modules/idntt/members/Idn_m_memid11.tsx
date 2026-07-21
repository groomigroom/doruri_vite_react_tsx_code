import { Link } from 'react-router-dom';

import './Idn_m_memid11.css';

import Menu from '../../Menu';

// import Idn_mm_memid11_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid11() {
    return (
        <div className="idn_mm_id11_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid11' className="on">한국어</Link>
                <Link to='/Idn_m_memid11Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />이규혁<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                멤버들과<br />
                열심히<br />
                활동해 볼게요!
            </p>
            <img src='' alt="이규혁 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2010년 8월 6일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>189cm</p></td>
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
                        <td><p>INTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#c6e800</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>겁이 없음</p></td>
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











