import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './BTSMemJungKook.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bts_Jungkook_m_img from '../main/img/Bts_mm_Jungkook_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemJungKook() {
    DoruriDocumentTitle('정국');

    return (
        <div className="bts_mm_jungkook_full">
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMemJungKook' className="on">한국어</Link>
                <Link to='/BTSMemJungKookEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="방탄소년단 꾸미기" />정국<img src={MainH2Deco} alt="방탄소년단 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                &apos;정국&apos;과 함께<br />
                더 나은 방향으로<br />
                달려 가봐요!
            </p>
            <img src={Bts_Jungkook_m_img} alt="정국 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb bts_mm_jungkook_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1997년 9월 1일</p></td>
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
                        <td><p>메인보컬, 리드댄서, 서브래퍼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>황금 막내</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>감성적임</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
