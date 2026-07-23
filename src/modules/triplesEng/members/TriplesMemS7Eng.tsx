import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS7.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s7_img from '../../triples/main/img/tri_m_memS7.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS7Eng() {
    return (
        <div className="tri_mm_s7_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS7'>한국어</Link>
                <Link to='/TriplesMemS7Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kim NaKyoung<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I have a soft heart,<br />
                but I'll come back<br />
                to you bravely!</p>
            <img src={Tri_mm_s7_img} alt="Kim NaKyoung img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 13, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>166cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Naky</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Sleeping</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Cooking ramen</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Spicy food</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                Acid Angel from Asia, Acid Eyes, <br />
                                EVOLution, Visionary Vision, neptune
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>tenderness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};


