import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './IoiMemJungcheyun.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Ioi_m_MemJungcheyun_img from '../main/img/ioi_m_mem_Jungchaeyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemJungcheyun() {
    return (
        <div className="ioi_mm_jungcheyun_full">
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMemJungcheyun' className="on">한국어</Link>
                <Link to='/IoiMemJungcheyunEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />정채연<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                어떤 상황에서도<br />
                열심히 노력하며<br />
                여러분을 찾아 갈게요!</p>
            <img src={Ioi_m_MemJungcheyun_img} alt="정채연 이미지" className='tri_mm_s1_img ioi_mm_jungcheyun_img' />
            <table className='tri_mm_s1_intropa_tb ioi_mm_jungcheyun_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1997년 12월 1일</p></td>
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
                        <td><p>챈</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>서브보컬</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>당당함?</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />
        </div>
    );
};
