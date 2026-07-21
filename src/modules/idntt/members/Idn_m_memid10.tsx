import { Link } from 'react-router-dom';

import './Idn_m_memid10.css';

import Menu from '../../Menu';

// import Idn_mm_memid10_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid10() {
    return (
        <div className="idn_mm_id10_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid10' className="on">한국어</Link>
                <Link to='/Idn_m_memid10Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />토와<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                정직한 마음으로<br />
                열심히 준비해서<br />
                여러분을 만나러 갈게요!
            </p>
            <img src='' alt="토와 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 4월 9일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>179cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>yesweare</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#338ce5</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>거짓말을 못함</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>게로네코</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};









