import { Link } from 'react-router-dom';

import './Idn_m_memid20.css';

import Menu from '../../Menu';

// import Idn_mm_memid20_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid20() {
    return (
        <div className="idn_mm_id20_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid20' className="on">한국어</Link>
                <Link to='/Idn_m_memid20Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />조은찬<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                개성있는<br />
                제 음악과 춤을<br />
                전해 드릴게요!
            </p>
            <img src='' alt="조은찬 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2007년 9월 7일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>180cm 후반</p></td>
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
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#846eea</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>4차원</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>모드하우스 1호 알파카</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};





























