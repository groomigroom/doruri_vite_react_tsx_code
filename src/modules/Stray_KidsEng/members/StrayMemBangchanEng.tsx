import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../Stray_Kids/members/StrayMemBangchan.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Str_mm_bangchan_img from '../../Stray_Kids/main/img/stray_m_mem_Bangchan.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function StrayMemBangchanEng() {
    EngPage('en', 'ko');

    return (
        <div className="str_mm_bangchan_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayMemBangchan'>한국어</Link>
                <Link to='/StrayMemBangchanEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Bangchan<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will always cheer up<br />
                and come to you<br />
                with a kind heart!</p>
            <img src={Str_mm_bangchan_img} alt="Bangchan" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 3, 1997</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>3RACHA</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFJ-T</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Chris</p></td>
                    </tr>
                    <tr>
                        <td><p>SKZOO</p></td>
                        <td><p>Wolf Chan</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>wolf</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td>
                            <p>leader</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>kindness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );
}
