import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemHan.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Str_mm_han_img from '../../Stray_Kids/main/img/stray_m_mem_Han.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemHanEng() {
    EngPage('en', 'ko');

    return (
        <div className="str_mm_han_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemHan'>한국어</Link>
                <Link to='/StrayMemHanEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Han<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you with<br />
                a positive personality<br />
                and take care of the members!</p>
            <img src={Str_mm_han_img} alt="Han" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 14, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>3RACHA</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>quokka</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>HAN QUOKKA</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>quokka</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>main rapper</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );
}
