import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemIn.css';

import MenuEng from '../../HomeEng/MenuEng';

import Str_mm_in_img from '../../Stray_Kids/main/img/stray_m_mem_In.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemInEng() {
    EngPage('en', 'ko');

    return (
        <div className="str_mm_in_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemIn'>한국어</Link>
                <Link to='/StrayMemInEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />I.N<img src={MainH2Deco} alt="Stray Kids 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll work hard and<br />
                plan and<br />
                come back to you!</p>
            <img src={Str_mm_in_img} alt="I.N" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 8, 2001</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>x</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Eeenee</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>Jiniret</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>desert fox</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>vocal</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>planned</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

