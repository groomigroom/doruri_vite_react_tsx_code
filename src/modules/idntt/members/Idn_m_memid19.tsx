import { Link } from 'react-router-dom';

import './Idn_m_memid19.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Idn_mm_memid19_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid19() {
    return (
        <div className="idn_mm_id19_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid19' className="on">한국어</Link>
                <Link to='/Idn_m_memid19Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />양경호<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                좋은 친화력으로<br />
                멤버들과<br />
                잘 지내 볼게요!
            </p>
            <img src='' alt="양경호 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2008년 2월 25일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>18?cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>itsnotover</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#fed480</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>친화력이 좋음</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>양갱</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};



























