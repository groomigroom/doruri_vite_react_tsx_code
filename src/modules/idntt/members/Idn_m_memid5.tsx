import { Link } from 'react-router-dom';

import './Idn_m_memid5.css';

import Menu from '../../Menu';

// import Idn_mm_memid5_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid5() {
    return (
        <div className="idn_mm_id5_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid5' className="on">한국어</Link>
                <Link to='/Idn_m_memid5Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />이재영<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                멤버들과<br />
                편하게 잘 지내며<br />
                열심히 &apos;idntt&apos; 활동 할게요!
            </p>
            <img src='' alt="이재영 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 10월 3일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>185cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>unevermet</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#b8ace8</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>감수성이 풍부함</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>햄냥이</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};







