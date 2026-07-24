import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS21.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s21_img from '../../triples/main/img/tri_m_memS21.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS21Eng() {
    return (
        <div className="tri_mm_s21_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS21'>한국어</Link>
                <Link to='/TriplesMemS21Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kim ChaeWon<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll come to you with<br />
                my unrivaled<br />
                bouncy personality!</p>
            <img src={Tri_mm_s21_img} alt="Kim ChaeWon img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 2, 2007</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Ggobukee</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Reading books</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>A special martial art</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Malatang</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                Glow, ∞!, <br />
                                Alphie, sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>unrivaled</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};



















