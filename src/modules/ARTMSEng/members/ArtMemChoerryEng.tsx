import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ARTMS/members/ArtMemChoerry.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Art_mm_Choerry_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemChoerryEng() {
    EngPage('en', 'ko');

    return (
        <div className="art_mm_jinsoul_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ArtMemChoerry'>한국어</Link>
                <Link to='/ArtMemChoerryEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />Choerry<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Hurry up<br />
                feel The Pressure<br />
                with &apos;Choerry&apos;!
            </p>
            <img src='' alt="Choerry" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>June 4, 2001</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>symbol</p></td>
                        <td><p>fruit bat</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Lee</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>ODD EYE CIRCLE</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>cheerfulness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};




