import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemYuyeonjung.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Ioi_m_MemYuyeonjung_img from '../main/img/ioi_m_mem_Yuyunjung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemYuyeonjung() {
    return (
        <div className="ioi_mm_yuyeonjung_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemYuyeonjung' className="on">한국어</Link>
                <Link to='/IoiMemYuyeonjungEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />유연정<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                즐겁고 신나는<br />
                마음으로<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ioi_m_MemYuyeonjung_img} alt="유연정 이미지" className='tri_mm_s1_img ioi_mm_yuyeonjung_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_yuyeonjung_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 8월 3일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>166cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>뎡</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인보컬</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음?</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 스타쉽엔터테인먼트' />
        </div>
    );
};
