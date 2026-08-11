import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './BTSMemV.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bts_V_m_img from '../main/img/Bts_mm_V_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemV() {
    DoruriDocumentTitle('뷔');

    return (
        <div className="bts_mm_v_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMemV' className="on">한국어</Link>
                <Link to='/BTSMemVEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="방탄소년단 꾸미기" />뷔<img src={MainH2Deco} alt="방탄소년단 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                &apos;뷔&apos;과 함께<br />
                따뜻한 곳으로<br />
                달려 가봐요!
            </p>
            <img src={Bts_V_m_img} alt="뷔 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bts_mm_v_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1995년 12월 30일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>179cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>AB형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>댄서, 서브보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>태태</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>??</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
