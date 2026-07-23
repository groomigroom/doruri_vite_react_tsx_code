import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemKimchungha.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Ioi_m_MemKimchungha_img from '../main/img/ioi_m_mem_Kimchungha.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemKimchungha() {
    return (
        <div className="ioi_mm_kimchungha_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemKimchungha' className="on">한국어</Link>
                <Link to='/IoiMemKimchunghaEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />김청하<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                제가 그동안<br />
                꿈꿔왔던 노래를<br />
                들려 드릴게요!</p>
            <img src={Ioi_m_MemKimchungha_img} alt="김청하 이미지" className='tri_mm_s1_img ioi_mm_kimchungha_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_kimchungha_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1996년 2월 9일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>갓청하</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인댄서</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>낯가림</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};

MORE VISION