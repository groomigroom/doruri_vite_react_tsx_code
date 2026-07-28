import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../RESCENE/members/ResMemJena.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Res_mm_Jena_img from '../../RESCENE/main/img/rescene_m_mem_Jena.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemJenaEng() {
    EngPage('en', 'ko');

    return (
        <div className="res_mm_jena_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ResMemJena'>한국어</Link>
                <Link to='/ResMemJenaEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="RESCENE deco" />Zena<img src={MainH2Deco} alt="RESCENE deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'm really shy,<br />
                but I'll work hard<br />
                with the members!</p>
            <img src={Res_mm_Jena_img} alt="Zena" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 27, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Princess Shilla</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>zzeroming</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>squirrel</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>make a funny face</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>inhibition</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ THE MUZE ENTERTAINMENT' />
        </div>
    );

};



