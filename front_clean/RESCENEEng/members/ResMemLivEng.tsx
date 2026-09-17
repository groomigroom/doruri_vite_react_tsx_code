import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../RESCENE/members/ResMemLiv.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Res_mm_Liv_img from '../../RESCENE/main/img/rescene_m_mem_Liv.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemLivEng() {
    EngPage('en', 'ko');

    return (
        <div className="res_mm_liv_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ResMemLiv'>한국어</Link>
                <Link to='/ResMemLivEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="RESCENE deco" />Liv<img src={MainH2Deco} alt="RESCENE deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll try to participate<br />
                in a lot of good music<br />
                work using my good memory!</p>
            <img src={Res_mm_Liv_img} alt="Liv" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 11, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Litt</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>ribbu</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>hamster</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFP</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>board games</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>unique</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ THE MUZE ENTERTAINMENT' />
        </div>
    );

};


