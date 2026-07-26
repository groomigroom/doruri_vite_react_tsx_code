import { Link } from 'react-router-dom';

import '../../idntt/members/Idn_m_memid19.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Idn_mm_memid19_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid19Eng() {
    return (
        <div className="idn_mm_id19_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/Idn_m_memid19'>한국어</Link>
                <Link to='/Idn_m_memid19Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt deco" />yanggyungho<img src={MainH2Deco} alt="idntt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll try to get along<br />
                with the members with<br />
                a good affinity!
            </p>
            <img src='' alt="yanggyungho" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 25, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>18?cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>istnotover</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic color</p></td>
                        <td><p>#fed480</p></td>
                    </tr>
                    <tr>
                        <td><p>character</p></td>
                        <td><p>good affinity</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>nickname</p></td>
                        <td><p>Yanggang</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};



