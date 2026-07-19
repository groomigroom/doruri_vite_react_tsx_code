import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemChoiyujung.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import ioi_mm_choiyujung_img from '../main/img/ioi_m_mem_Choiyujung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemChoiyujung() {
    return (
        <div className="ioi_mm_choiyujung_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemChoiyujung' className="on">한국어</Link>
                <Link to='/IoiMemChoiyujungEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />최유정<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                제 개성있는<br />
                생각과 마음을 담아서<br />
                여러분을 찾아 갈게요!</p>
            <img src={ioi_mm_choiyujung_img} alt="최유정 이미지" className='tri_mm_s1_img ioi_mm_choiyujung_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_choiyujung_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 11월 12일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>159cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>유댕</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인댄서</p></td>
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
