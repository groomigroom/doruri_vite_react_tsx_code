import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ARTMS/members/ArtMemKimlip.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Art_mm_Heejin_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ArtMemKimlipEng() {
    return (
        <div className="art_mm_kimlip_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ArtMemKimlip'>한국어</Link>
                <Link to='/ArtMemKimlipEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ARTMS deco" />Kim Lip<img src={MainH2Deco} alt="ARTMS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Gimme that spin<br />
                Gimme that spin<br />
                with &apos;Kim Lip&apos;!
            </p>
            <img src='' alt="Kim Lip" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 10, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>symbol</p></td>
                        <td><p>owl</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>solo singer Kimlip</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTP</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>ODD EYE CIRCLE</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>diligence</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};







