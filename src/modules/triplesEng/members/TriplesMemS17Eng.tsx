import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS17.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s17_img from '../../triples/main/img/tri_m_memS17.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS17Eng() {
    return (
        <div className="tri_mm_s17_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS17'>한국어</Link>
                <Link to='/TriplesMemS17Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Lynn<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with a kind<br />
                and relaxed heart!</p>
            <img src={Tri_mm_s17_img} alt="Lynn img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>April 12, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>172cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Kawalynn</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Lisening music</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Dance?</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>bread</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                NXT, Visionary Vision, <br />
                                Alphie, moon
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>softness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};



















