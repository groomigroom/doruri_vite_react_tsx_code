import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../DAY6/members/DayMemYoungK.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Day_mm_youngk_img from '../../DAY6/main/img/day6_m_mem_Youngk.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemYoungKEng() {
    EngPage('en', 'ko');

    return (
        <div className="day_mm_youngk_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/DayMemYoungK'>한국어</Link>
                <Link to='/DayMemYoungKEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 deco" />Young K<img src={MainH2Deco} alt="DAY6 deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'm going to<br />
                work hard and<br />
                come to you!
            </p>
            <img src={Day_mm_youngk_img} alt="Young K" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 19, 1993</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>180.2cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blooe type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>bass, vocal, rap, electric guitar</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>KE</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>fox</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Toranow</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>DAY6 &#40;Even of Day&#41;</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>diligence</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng FooterPartEngText='ⓒ JYP ENTERTAINMENT' />
        </div>
    );

};
