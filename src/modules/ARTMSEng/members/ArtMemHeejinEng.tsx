import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ARTMS/members/ArtMemHeejin.css';

import Menu from '../../Menu';

// import Art_mm_Heejin_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemHeejinEng() {
    return (
        <div className="art_mm_heejin_full">
            <Menu />
            <section className="home_translate">
                <Link to='/ArtMemHeejin' className="on">한국어</Link>
                <Link to='/ArtMemHeejinEng'>English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />HeeJin<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Don&apos;t Wanna<br />
                Breakdown<br />
                with &apos;HeeJin&apos;!
            </p>
            <img src='' alt="HeeJin" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 19, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>161.2cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>symbol</p></td>
                        <td><p>rabbit</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Heekki</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>high self-esteem</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};



