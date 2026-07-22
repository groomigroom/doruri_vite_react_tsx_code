import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ArtMemHeejin.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Art_mm_Heejin_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemHeejin() {
    return (
        <div className="art_mm_heejin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ArtMemHeejin' className="on">한국어</Link>
                <Link to='/ArtMemHeejinEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />희진<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;희진&apos;과 함께<br />
                Don&apos;t Wanna<br />
                Breakdown!
            </p>
            <img src='' alt="희진" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2000년 10월 19일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161.2cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>A형</p></td>
                    </tr>
                    <tr>
                        <td><p>상징</p></td>
                        <td><p>토끼</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>희끼</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>자존감 높음</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};

