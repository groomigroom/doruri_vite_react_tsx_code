import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import './ArtMemChoerry.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Art_mm_Choerry_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemChoerry() {
    return (
        <div className="art_mm_choerry_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ArtMemChoerry' className="on">한국어</Link>
                <Link to='/ArtMemChoerryEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />최리<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;최리&apos;와 함께<br />
                서둘러<br />
                Feel The Pressure!
            </p>
            <img src='' alt="최리" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>2001년 6월 4일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>O형</p></td>
                    </tr>
                    <tr>
                        <td><p>상징</p></td>
                        <td><p>과일박쥐</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>리</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>ODD EYE CIRCLE</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>발랄함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart />

        </div>
    );
};

