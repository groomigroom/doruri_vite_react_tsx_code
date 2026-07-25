import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../tws/members/TwsMemDohun.css';

import MenuEng from '../../HomeEng/MenuEng';

import Tws_m_MemDohun_img from '../../tws/main/img/tws_m_mem_Dohun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemDohunEng() {
    return (
        <div className="tws_mm_dohun_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TwsMemDohun'>한국어</Link>
                <Link to='/TwsMemDohunEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS deco" />Dohoon<img src={MainH2Deco} alt="TWS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                24명은 너무 많지 않아요?<br />
                그리고... 그리고... 그리고...<br />
                더 열심히 더 열심히</p>
            <img src={Tws_m_MemDohun_img} alt="Dohoon" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 30, 2005</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>181cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>all-rounder</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Huni</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>frankness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

