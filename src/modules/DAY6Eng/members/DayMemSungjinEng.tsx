import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../DAY6/members/DayMemSungjin.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Day_mm_sungjin_img from '../../DAY6/main/img/day6_m_mem_Sungjin.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemSungjinEng() {
    EngPage('en', 'ko');

    return (
        <div className="day_mm_sungjin_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/DayMemSungjin'>한국어</Link>
                <Link to='/DayMemSungjinEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 deco" />Sungjin<img src={MainH2Deco} alt="DAY6 deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll be so into music<br />
                that I'll be with you guys<br />
                with that heart!
            </p>
            <img src={Day_mm_sungjin_img} alt="Sungjin" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 16, 1993</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>178cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blooe type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>leader, vocal, guitar</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>BANG</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>bear</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Leada</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>x</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>mildness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );

};
