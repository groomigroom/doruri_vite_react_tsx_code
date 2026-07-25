import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../RESCENE/members/ResMemMay.css';

import MenuEng from '../../HomeEng/MenuEng';

import Res_mm_May_img from '../../RESCENE/main/img/rescene_m_mem_May.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemMayEng() {
    return (
        <div className="res_mm_may_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ResMemMay'>한국어</Link>
                <Link to='/ResMemMayEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="RESCENE deco" />May<img src={MainH2Deco} alt="RESCENE deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll try to get along<br />
                with the members with<br />
                a quiet but delicate personality!</p>
            <img src={Res_mm_May_img} alt="May" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>August 19, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>157cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Mett</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>yam</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>elephant</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>good-naturedness</p></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );

};



