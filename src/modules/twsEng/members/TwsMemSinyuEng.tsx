import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../tws/members/TwsMemSinyu.css';

import MenuEng from '../../HomeEng/MenuEng';

import Tws_mm_sinyu_img from '../../tws/main/img/tws_m_mem_Sinyu.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemSinyuEng() {
    EngPage('en', 'ko');

    return (
        <div className="tws_mm_sinyu_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TwsMemSinyu'>한국어</Link>
                <Link to='/TwsMemSinyuEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS deco" />Shinyu<img src={MainH2Deco} alt="TWS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'm shy, but I'm<br />
                going to find<br />
                you so sweet!</p>
            <img src={Tws_mm_sinyu_img} alt="Shinyu" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 7, 2003</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>182cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>leader</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Yu</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>kindness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

