import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ARTMS/members/ArtMemJinsoul.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Art_mm_JinSoul_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemJinsoulEng() {
    EngPage('en', 'ko');

    return (
        <div className="art_mm_jinsoul_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ArtMemJinsoul'>한국어</Link>
                <Link to='/ArtMemJinsoulEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />JinSoul<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                See The<br />
                Light Behind<br />
                with &apos;JinSoul&apos;!
            </p>
            <img src='' alt="JinSoul" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>June 13, 1997</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>symbol</p></td>
                        <td><p>blue betta</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Jindori</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>ODD EYE CIRCLE</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};


