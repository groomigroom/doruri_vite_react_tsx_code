import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../idntt/members/Idn_m_memid18.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

// import Idn_mm_memid18_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid18Eng() {
    EngPage('en', 'ko');

    return (
        <div className="idn_mm_id18_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/Idn_m_memid18'>한국어</Link>
                <Link to='/Idn_m_memid18Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt deco" />leejooheon<img src={MainH2Deco} alt="idntt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll work hard every day<br />
                to prepare well<br />
                and come to you!
            </p>
            <img src='' alt="leejooheon" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 11, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>??</p></td>
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
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic color</p></td>
                        <td><p>#62d3d1</p></td>
                    </tr>
                    <tr>
                        <td><p>character</p></td>
                        <td><p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>nickname</p></td>
                        <td><p>Bamdolee</p></td>
                    </tr>

                </tbody>
            </table>

            <FooterPartEng FooterPartEngText='ⓒ Modhaus' />
        </div>
    );
};
