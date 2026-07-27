import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemLino.css';

import MenuEng from '../../HomeEng/MenuEng';

import Str_mm_lino_img from '../../Stray_Kids/main/img/stray_m_mem_Lino.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemLinoEng() {
    EngPage('en', 'ko');

    return (
        <div className="str_mm_lino_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemLino'>한국어</Link>
                <Link to='/StrayMemLinoEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Lee Know<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                We will come to you<br />
                with warm hearts<br />
                and fun hearts!</p>
            <img src={Str_mm_lino_img} alt="Lee Know" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 25, 1998</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Leelino</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>Leebit</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>rabbit</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>main dancer</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>sociable</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

