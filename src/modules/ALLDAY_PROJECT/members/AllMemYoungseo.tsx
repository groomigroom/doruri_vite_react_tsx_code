import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './AllMemYoungseo.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import All_mm_youngseo_img from '../main/img/allday_m_mem_Youngseo.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemYoungseo() {
    return (
        <div className="all_mm_youngseo_full">
            <Menu />
            <section className="home_translate">
                <Link to='/AllMemYoungseo' className="on">한국어</Link>
                <Link to='/AllMemYoungseoEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project 꾸미기" />영서<img src={MainH2Deco} alt="allday project 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                차분하고<br />
                성실하게 잘 준비해서<br />
                여러분을 만나러 갈게요!</p>
            <img src={All_mm_youngseo_img} alt="영서 이미지" className='tri_mm_s1_img all_mm_youngseo_img' />
            <table className='tri_mm_s1_intropa_tb all_mm_youngseo_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2005년 11월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>165.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>제로</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>성실함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ THEBLACKLABEL' />
        </div>
    );
}
