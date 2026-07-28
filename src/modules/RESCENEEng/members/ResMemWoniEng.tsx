import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../RESCENE/members/ResMemWoni.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Res_mm_Woni_img from '../../RESCENE/main/img/rescene_m_mem_Woni.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemWoniEng() {
    EngPage('en', 'ko');

    return (
        <div className="res_mm_woni_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ResMemWoni'>한국어</Link>
                <Link to='/ResMemWoniEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="RESCENE deco" />Woni<img src={MainH2Deco} alt="RESCENE deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll take good care of<br />
                the members in<br />
                a lively but mature way!</p>
            <img src={Res_mm_Woni_img} alt="Woni" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 25, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Charmander</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>jota</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic character</p></td>
                        <td><p>cat</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFP</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>decency</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ THE MUZE ENTERTAINMENT' />
        </div>
    );

};

