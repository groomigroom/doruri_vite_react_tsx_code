import { Link } from 'react-router-dom';

import '../../idntt/members/Idn_m_memid12.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Idn_mm_memid12_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid12Eng() {
    return (
        <div className="idn_mm_id12_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/Idn_m_memid12'>한국어</Link>
                <Link to='/Idn_m_memid12Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt deco" />parknuri<img src={MainH2Deco} alt="idntt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                #####24명은 많은 것 같아도<br />
                멤버들 질서 유지를<br />
                책임감 있게 다 해볼게요!
            </p>
            <img src='' alt="parknuri" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 4, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>182cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>yesweare</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic color</p></td>
                        <td><p>#fdd82e</p></td>
                    </tr>
                    <tr>
                        <td><p>character</p></td>
                        <td><p>mildness</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>nickname</p></td>
                        <td><p>??</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};























