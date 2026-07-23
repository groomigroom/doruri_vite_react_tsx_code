import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemKimdoyeon.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Ioi_m_MemKimdoyeon_img from '../main/img/ioi_m_mem_Kimdoyeon.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemKimdoyeon() {
    return (
        <div className="ioi_mm_kimdoyeon_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemKimdoyeon' className="on">한국어</Link>
                <Link to='/IoiMemKimdoyeonEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />김도연<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                눈물이 많지만<br />
                마음을 굳게 먹고<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ioi_m_MemKimdoyeon_img} alt="김도연 이미지" className='tri_mm_s1_img ioi_mm_kimdoyeon_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_kimdoyeon_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 12월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>171cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>도도</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>보컬</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};

판타지오