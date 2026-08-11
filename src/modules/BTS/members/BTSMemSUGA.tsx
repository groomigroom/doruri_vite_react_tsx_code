import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './BTSMemSUGA.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bts_Suga_m_img from '../main/img/Bts_mm_Suga_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemSUGA() {
    DoruriDocumentTitle('슈가');

    return (
        <div className="bts_mm_suga_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMemSUGA' className="on">한국어</Link>
                <Link to='/BTSMemSUGAEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="방탄소년단 꾸미기" />슈가<img src={MainH2Deco} alt="방탄소년단 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                &apos;슈가&apos;과 함께<br />
                자신에 대한<br />
                믿음을 가져봐요!
            </p>
            <img src={Bts_Suga_m_img} alt="슈가 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bts_mm_suga_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1993년 3월 9일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>174cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>리드래퍼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>gloss</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>다정함</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
