import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemHyunjin.css';

import MenuEng from '../../HomeEng/MenuEng';

import Str_mm_hyunjin_img from '../../Stray_Kids/main/img/stray_m_mem_Hyunjin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemHyunjinEng() {
    return (
        <div className="str_mm_hyunjin_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemHyunjin'>한국어</Link>
                <Link to='/StrayMemHyunjinEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Hyunjin<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you with<br />
                a kind heart and<br />
                a serious heart!</p>
            <img src={Str_mm_hyunjin_img} alt="Hyunjin" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 20, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Hyunee</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>Jiniret</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>white weasel</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>main dancer</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>kindness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

