import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemGangmina.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Ioi_m_MemGangmina_img from '../main/img/ioi_m_mem_Gangmina.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemGangmina() {
    return (
        <div className="ioi_mm_gangmina_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemGangmina' className="on">한국어</Link>
                <Link to='/IoiMemGangminaEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />강미나<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                밝은 표정과 함께<br />
                긍정적인 마음을 가지고<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ioi_m_MemGangmina_img} alt="강미나 이미지" className='tri_mm_s1_img ioi_mm_gangmina_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_gangmina_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 12월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>깡미나</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>보컬</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함?</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ 스토리제이컴퍼니' />
        </div>
    );
};
