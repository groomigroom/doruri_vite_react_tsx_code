import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemFilix.css';

import MenuEng from '../../HomeEng/MenuEng';

import Str_mm_filix_img from '../../Stray_Kids/main/img/stray_m_mem_Filix.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemFilixEng() {
    return (
        <div className="str_mm_filix_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemFilix'>한국어</Link>
                <Link to='/StrayMemFilixEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Felix<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll think positively<br />
                and prepare for<br />
                &apos;Stray Kids&apos; promotions!</p>
            <img src={Str_mm_filix_img} alt="Felix" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 15, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Yongbokee</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>BbokAri</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>chick</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>dancer??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>positive</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

