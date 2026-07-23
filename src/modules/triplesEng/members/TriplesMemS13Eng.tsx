import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS13.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s13_img from '../../triples/main/img/tri_m_memS13.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS13Eng() {
    return (
        <div className="tri_mm_s13_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS13'>한국어</Link>
                <Link to='/TriplesMemS13Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Nien<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll make a decision easily<br />
                and get along with the members<br />
                with a heart full of affection!</p>
            <img src={Tri_mm_s13_img} alt="Nien img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>June 2, 2003</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>169cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Nancy</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Watching drama</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Dancing</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Bibimbap</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                LOVElution, Aria, Visionary Vision, <br />
                                Alphie, neptune
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};

