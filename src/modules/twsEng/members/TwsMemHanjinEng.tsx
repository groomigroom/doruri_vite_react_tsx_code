import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../tws/members/TwsMemHanjin.css';

import MenuEng from '../../HomeEng/MenuEng';

import Tws_m_MemHanjin_img from '../../tws/main/img/tws_m_mem_Hanjin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemHanjinEng() {
    EngPage('en', 'ko');

    return (
        <div className="tws_mm_hanjin_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TwsMemHanjin'>한국어</Link>
                <Link to='/TwsMemHanjinEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS deco" />Hanjin<img src={MainH2Deco} alt="TWS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you with<br />
                a lot of sensitivity<br />
                and seriousness!</p>
            <img src={Tws_m_MemHanjin_img} alt="Hanjin" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 5, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>176cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>sub vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Parkhanjin</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>thoughtfulness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

