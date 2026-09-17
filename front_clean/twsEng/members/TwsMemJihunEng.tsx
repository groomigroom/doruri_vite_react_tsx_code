import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../tws/members/TwsMemJihun.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tws_mm_jihun_img from '../../tws/main/img/tws_m_mem_Jihun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemJihunEng() {
    EngPage('en', 'ko');

    return (
        <div className="tws_mm_jihun_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TwsMemJihun'>한국어</Link>
                <Link to='/TwsMemJihunEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS deco" />Jihoon<img src={MainH2Deco} alt="TWS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you with<br />
                a bright smile and<br />
                a happy heart!</p>
            <img src={Tws_mm_jihun_img} alt="Jihoon" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 28, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>178.9cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main dancer</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>jellyfish</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ PLEDIS Entertainment' />
        </div>
    );
};
