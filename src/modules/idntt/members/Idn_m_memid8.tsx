import { Link } from 'react-router-dom';

import './Idn_m_memid8.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Idn_mm_memid8_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid8() {
    return (
        <div className="idn_mm_id8_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid8' className="on">한국어</Link>
                <Link to='/Idn_m_memid8Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />이환희<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                즐거운 마음으로<br />
                여러분을<br />
                만나러 갈게요!
            </p>
            <img src='' alt="이환희 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2009년 7월 11일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>183cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>??</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>unevermet</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFP</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#ffed49</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>또치</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};





