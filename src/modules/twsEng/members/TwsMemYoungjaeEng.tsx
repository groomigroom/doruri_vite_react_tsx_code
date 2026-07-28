import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../tws/members/TwsMemYoungjae.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tws_mm_youngjae_img from '../../tws/main/img/tws_m_mem_Jihun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMemYoungjaeEng() {
    EngPage('en', 'ko');

    return (
        <div className="tws_mm_youngjae_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TwsMemYoungjae'>한국어</Link>
                <Link to='/TwsMemYoungjaeEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="TWS deco" />Youngjae<img src={MainH2Deco} alt="TWS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with a quiet<br />
                but sweet heart!</p>
            <img src={Tws_mm_youngjae_img} alt="Youngjae" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 31, 2005</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>180cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Youngchuni</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>kindness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ PLEDIS Entertainment' />
        </div>
    );
};
