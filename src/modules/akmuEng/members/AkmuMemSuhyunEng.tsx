import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../akmu/members/AkmuMemSuhyun.css';

import MenuEng from '../../HomeEng/MenuEng';

import akmu_mm_suhyun_img from '../../akmu/main/img/aknu_m_suhyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AkmuMemSuhyunEng() {
    return (
        <div className="akmu_mm_suhyun_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AkmuMemSuhyun'>한국어</Link>
                <Link to='/AkmuMemSuhyunEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="AKMU deco" />Lee Suhyun<img src={MainH2Deco} alt="AKMU deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Even if it's hard,<br />
                I'll overcome it<br />
                and come back to you!</p>
            <img src={akmu_mm_suhyun_img} alt="Lee Suhyun" className='tri_mm_s1_img akmu_mm_suhyun_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 4, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Leesu</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTP</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>calmness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

