import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/members/TriplesMemS1.css';
import './ArtMemJinsoul.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Art_mm_Jinsoul_img from '../main/img/Art_mm_Jinsoul_img.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemJinsoul() {
    DoruriDocumentTitle('진솔');

    return (
        <div className="art_mm_jinsoul_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ArtMemJinsoul' className="on">한국어</Link>
                <Link to='/ArtMemJinsoulEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />진솔<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                &apos;진솔&apos;과 함께<br />
                See The<br />
                Light Behind!
            </p>
            <img src={Art_mm_Jinsoul_img} alt="진솔" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb art_mm_jinsoul_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>출생</p></td>
                        <td><p>1997년 6월 13일</p></td>
                    </tr>
                    <tr>
                        <td><p>키</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>혈액형</p></td>
                        <td><p>B형</p></td>
                    </tr>
                    <tr>
                        <td><p>상징</p></td>
                        <td><p>블루베타</p></td>
                    </tr>
                    <tr>
                        <td><p>별명</p></td>
                        <td><p>진도리</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>소속 유닛</p></td>
                        <td><p>ODD EYE CIRCLE</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>성격</p></td>
                        <td><p>활발함</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />

        </div>
    );
};
