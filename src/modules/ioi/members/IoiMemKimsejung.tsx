import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemKimsejung.css';

import Menu from '../../Menu';

import Ioi_m_MemKimsejung_img from '../main/img/ioi_m_mem_Kimsejung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemKimsejung() {
    return (
        <div className="ioi_mm_kimsejung_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemKimsejung' className="on">한국어</Link>
                <Link to='/IoiMemKimsejungEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />김세정<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                감성적인 생각과<br />
                다양한 생각을 가지고<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ioi_m_MemKimsejung_img} alt="김세정 이미지" className='tri_mm_s1_img ioi_mm_kimsejung_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_kimsejung_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1996년 8월 28일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>164cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>갓세정</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인보컬</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>사교적임?</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
