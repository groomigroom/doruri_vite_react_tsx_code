import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './BTSMemJhope.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bts_Jhope_m_img from '../main/img/Bts_mm_Jhope_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemJhope() {
    DoruriDocumentTitle('제이홉');

    return (
        <div className="bts_mm_jhope_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMemJhope' className="on">한국어</Link>
                <Link to='/BTSMemJhopeEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="방탄소년단 꾸미기" />제이홉<img src={MainH2Deco} alt="방탄소년단 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                &apos;제이홉&apos;과 함께<br />
                자신의 반응을<br />
                따라서 어디든지 가봐요!
            </p>
            <img src={Bts_Jhope_m_img} alt="제이홉 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bts_mm_jhope_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1994년 2월 18일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>177cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>포지션</p></td>
                        <td><p>메인댄서, 서브래퍼, 서브보컬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>호비</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
