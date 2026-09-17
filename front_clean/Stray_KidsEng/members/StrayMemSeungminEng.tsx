import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemSeungmin.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Str_mm_seungmin_img from '../../Stray_Kids/main/img/stray_m_mem_Seungmin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';


export default function StrayMemSeungminEng() {
    EngPage('en', 'ko');

    return (
        <div className="str_mm_seungmin_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemSeungmin'>한국어</Link>
                <Link to='/StrayMemSeungminEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Seungmin<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will visit you<br />
                with a kind and<br />
                warm heart!</p>
            <img src={Str_mm_seungmin_img} alt="Seungmin" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 22, 2000</p></td>
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
                        <td><p>ESFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Daengdaengee</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>PuppyM</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>puppy</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>main vocal</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>kindness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );
}
