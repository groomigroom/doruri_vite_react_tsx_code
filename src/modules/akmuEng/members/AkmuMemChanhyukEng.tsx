import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../akmu/members/AkmuMemChanhyuk.css';

import MenuEng from '../../HomeEng/MenuEng';

import akmu_mm_chanhyuk_img from '../../akmu/main/img/aknu_m_chanhyuk.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AkmuMemChanhyukEng() {
    return (
        <div className="akmu_mm_chanhyuk_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AkmuMemChanhyuk'>한국어</Link>
                <Link to='/AkmuMemChanhyukEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="akmu deco" />Lee Chanhyuk<img src={MainH2Deco} alt="akmu deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll think about it<br />
                and prepare well<br />
                and come back to you!</p>
            <img src={akmu_mm_chanhyuk_img} alt="Lee Chanhyuk 이미지" className='tri_mm_s1_img akmu_mm_chanhyuk_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 12, 1996</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>LeePD</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENTJ</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>excellent preparation</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

