import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../idntt/members/Idn_m_memid17.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Idn_mm_memid17_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid17Eng() {
    EngPage('en', 'ko');

    return (
        <div className="idn_mm_id17_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/Idn_m_memid17'>한국어</Link>
                <Link to='/Idn_m_memid17Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt deco" />kwakgiwoong<img src={MainH2Deco} alt="idntt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll work<br />
                hard<br />
                every day!
            </p>
            <img src='' alt="kwakgiwoong" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 1, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>??</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>istnotover</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic color</p></td>
                        <td><p>#0050a4</p></td>
                    </tr>
                    <tr>
                        <td><p>character</p></td>
                        <td><p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>nickname</p></td>
                        <td><p>baby leader</p></td>
                    </tr>
                </tbody>
            </table>

            <FooterPartEng FooterPartEngText='ⓒ Modhaus' />
        </div>
    );
};
