import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import './Idn_m_memid16.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Idn_mm_memid16_img from '../main/img/Idn_mm_id16_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid16() {
    DoruriDocumentTitle('황은수');

    return (
        <div className="idn_mm_id16_full">
            <Menu />
            <section className="home_translate">
                <Link to='/Idn_m_memid16' className="on">한국어</Link>
                <Link to='/Idn_m_memid16Eng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt 로고 꾸미기" />황은수<img src={MainH2Deco} alt="idntt 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                자신감있게 그리고<br />
                다정한 마음으로<br />
                여러분을 찾아 갈게요!
            </p>
            <img src={Idn_mm_memid16_img} alt="황은수 이미지" className='tri_mm_s1_img idn_mm_id16_img' />
            <table className='tri_mm_s1_intropa_tb idn_mm_id16_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2009년 6월 10일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>183cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>yesweare</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>상징색</p></td>
                        <td><p>#ff7364</p></td>
                    </tr>
                    <tr>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>별명</p></td>
                        <td><p>응구</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />

        </div>
    );
};
