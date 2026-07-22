import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ArtMemKimlip.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Art_mm_Kimlip_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemKimlip() {
    return (
        <div className="art_mm_kimlip_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ArtMemKimlip' className="on">한국어</Link>
                <Link to='/ArtMemKimlipEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />김립<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;김립&apos;과 함께<br />
                Gimme that spin<br />
                Gimme that spin!
            </p>
            <img src='' alt="김립" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1999년 2월 10일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>상징</p></td>
                        <td><p>부엉이</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>솔로가수 김립</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTP</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>ODD EYE CIRCLE</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>부지런함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};

