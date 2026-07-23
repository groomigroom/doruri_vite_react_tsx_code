import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS11.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s11_img from '../../triples/main/img/tri_m_memS11.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS11Eng() {
    return (
        <div className="tri_mm_s11_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS11'>한국어</Link>
                <Link to='/TriplesMemS11Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kotone<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll actively work<br />
                on new music<br />
                with the members!</p>
            <img src={Tri_mm_s11_img} alt="Kotone img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 10, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>161.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Koto</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Sleeping</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Making artificial tears quickly</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Grilled short rib patties</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                EVOLution, Visionary Vision, <br />
                                ∞!, Alphie, neptune
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>sociable</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};


