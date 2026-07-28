import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../idntt/members/Idn_m_memid7.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Idn_mm_memid7_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid7Eng() {
    EngPage('en', 'ko');

    return (
        <div className="idn_mm_id7_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/Idn_m_memid7'>한국어</Link>
                <Link to='/Idn_m_memid7Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt deco" />namjiwoon<img src={MainH2Deco} alt="idntt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll think<br />
                carefully and<br />
                do my best!
            </p>
            <img src='' alt="namjiwoon" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>July 7, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>177cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>unevermet</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENTP</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic color</p></td>
                        <td><p>#8ad363</p></td>
                    </tr>
                    <tr>
                        <td><p>character</p></td>
                        <td><p>prudence</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>nickname</p></td>
                        <td><p>Jiwoonee</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};













