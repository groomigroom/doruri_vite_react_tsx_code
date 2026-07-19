import { Link } from 'react-router-dom';

import './Idn_m_memid4.css';

import Menu from '../../Menu';

// import Idn_mm_memid4_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid4() {
    return (
        <div className="idn_mm_id4_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid4' className="on">한국어</Link>
                <Link to='/Idn_m_memid4Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />최태인<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                신중하게<br />
                잘 준비해서<br />
                여러분을 만나러 갈게요!
            </p>
            <img src='' alt="최태인 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 11월 17일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>185cm</p></td>
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
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#564fed</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>차분함</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>쿼카</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};





