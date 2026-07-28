import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemChangbin.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Str_mm_changbin_img from '../../Stray_Kids/main/img/stray_m_mem_Changbin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemChangbinEng() {
    EngPage('en', 'ko');

    return (
        <div className="str_mm_changbin_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemChangbin'>한국어</Link>
                <Link to='/StrayMemChangbinEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Changbin<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will try to sympathize<br />
                with the members and maintain<br />
                a good atmosphere with them!</p>
            <img src={Str_mm_changbin_img} alt="Changbin" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>August 11, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>3RACHA</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Dwaekki</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>DWAEKKI</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>pig rabbit</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>main rapper</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>subtlety</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );
}
