import { Link } from 'react-router-dom';

import '../../idntt/members/Idn_m_memid14.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Idn_mm_memid14_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid14Eng() {
    return (
        <div className="idn_mm_id14_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/Idn_m_memid14'>한국어</Link>
                <Link to='/Idn_m_memid14Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt deco" />hanyejoon<img src={MainH2Deco} alt="idntt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll go and meet you<br />
                without any lies<br />
                with my honest heart!
            </p>
            <img src='' alt="hanyejoon" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 13, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>184cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>yesweare</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INTP</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic color</p></td>
                        <td><p>#49369a</p></td>
                    </tr>
                    <tr>
                        <td><p>character</p></td>
                        <td><p>frankness</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>nickname</p></td>
                        <td><p>Yejunbot</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};


























