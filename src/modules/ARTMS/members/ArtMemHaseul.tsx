import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ArtMemHaseul.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Art_mm_Haseul_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemHaseul() {
    return (
        <div className="art_mm_haseul_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ArtMemHaseul' className="on">한국어</Link>
                <Link to='/ArtMemHaseulEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />하슬<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;하슬&apos;과 함께<br />
                밝은 햇살을<br />
                기억해 봐요!
            </p>
            <img src='' alt="하슬" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1997년 8월 18일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>159cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>상징</p></td>
                        <td><p>하얀 새</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>하쑤리</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>계획적임</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};



