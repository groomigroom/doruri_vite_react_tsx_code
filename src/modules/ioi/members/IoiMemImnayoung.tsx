import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemImnayoung.css';

import Menu from '../../Menu';

import Ioi_m_MemImnayoung_img from '../main/img/ioi_m_mem_Imnayoung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemImnayoung() {
    return (
        <div className="ioi_mm_imnayoung_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemImnayoung' className="on">한국어</Link>
                <Link to='/IoiMemImnayoungEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />임나영<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                저희 확실한<br />
                개성을 담아서<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ioi_m_MemImnayoung_img} alt="임나영 이미지" className='tri_mm_s1_img ioi_mm_imnayoung_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_imnayoung_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1995년 12월 18일</p></td>
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
                        <td><p>돌나영</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리더</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음?</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
