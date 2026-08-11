import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './BTSMemJin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bts_Jin_m_img from '../main/img/Bts_mm_Jin_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemJin() {
    DoruriDocumentTitle('진');

    return (
        <div className="bts_mm_jin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMemJin' className="on">한국어</Link>
                <Link to='/BTSMemJinEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="방탄소년단 꾸미기" />진<img src={MainH2Deco} alt="방탄소년단 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                &apos;진&apos;과 함께<br />
                어딘가로 열심히<br />
                달려 가봐요!
            </p>
            <img src={Bts_Jin_m_img} alt="진 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bts_mm_jin_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1992년 12월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>179.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>서브보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>차문남</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
