import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './HanMemHanroro.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Han_mm_Hanroro_img from '../main/img/Hanroro_m_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function HanMemHanroro() {
    DoruriDocumentTitle('한로로');

    return (
        <div className="han_mm_hanroro_full">
            <Menu />
            <section className="home_translate">
                <Link to='/HanMemHanroro' className="on">한국어</Link>
                <Link to='/HanMemHanroroEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'>
                <img src={MainH2Deco} alt="한로로 꾸미기" />한로로<img src={MainH2Deco} alt="한로로 꾸미기" />
            </h2>
            <p className='tri_mm_s1_intropp'>
                여러분에게<br />
                좋은 영향을 줄 수<br />
                있도록 노력해 볼게요!
            </p>
            <img src={Han_mm_Hanroro_img} alt="한로로 이미지" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb han_mm_hanroro_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 11월 11일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>158cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>취미</p></td>
                        <td><p>글쓰기</p></td>
                    </tr>
                    <tr>
                        <td><p>특기</p></td>
                        <td><p>잘 웃기</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>~~로로</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>밝음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ authentic' />

        </div>
    );
}; 
