import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS2.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s2_img from '../../triples/main/img/tri_m_memS2.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS2Eng() {
    return (
        <div className="tri_mm_s2_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS2'>한국어</Link>
                <Link to='/TriplesMemS2Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="tripleS deco" />Jeong HyeRin<img src={MainH2Deco} alt="tripleS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I worked hard on it,<br />
                all of me with music<br />
                I'll play it for you!
            </p>
            <img src={Tri_mm_s2_img} alt="Jeong HyeRin img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>April 12, 2007</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Rine</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Listening music</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Throwing snacks</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>stir-fried Rice Cake</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                Acid Angel from Asia, Acid Eyes, <br />
                                LOVElution, Visionary Vision, sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>perfect?!</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};

