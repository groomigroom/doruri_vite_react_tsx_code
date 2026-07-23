import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS5.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s5_img from '../../triples/main/img/tri_m_memS5.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS5Eng() {
    return (
        <div className="tri_mm_s5_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS5'>한국어</Link>
                <Link to='/TriplesMemS5Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kim YooYeon<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll take good care of<br />
                other members and<br />
                show you how I improve!</p>
            <img src={Tri_mm_s5_img} alt="Kim YooYeon img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>February 9, 2001</p></td>
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
                        <td><p>The one who goes around at Ewha Womans University?</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Ski</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Ending angel</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Sushi</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                Acid Angel from Asia, Acid Eyes, <br />
                                EVOLution, Visionary Vision, ∞!, Alphie, sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>calmness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};








