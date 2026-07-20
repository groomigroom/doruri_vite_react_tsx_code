import { Link } from 'react-router-dom';

import './Idn_m_memid13.css';

import Menu from '../../Menu';

// import Idn_mm_memid11_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid13() {
    return (
        <div className="idn_mm_id13_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid13' className="on">한국어</Link>
                <Link to='/Idn_m_memid13Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />김성준<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                #####24명은 많은 것 같아도<br />
                멤버들 질서 유지를<br />
                책임감 있게 다 해볼게요!
            </p>
            <img src='' alt="김성준 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2006년 9월 26일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>183cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>yesweare</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTP</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#95a9d7</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>유쾌함</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>쭌멍이</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};


즐거운 마음으로
열심히
활동해 볼게요!












