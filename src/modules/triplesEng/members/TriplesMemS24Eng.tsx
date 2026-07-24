import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS24.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s24_img from '../../triples/main/img/tri_m_memS24.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS24Eng() {
    return (
        <div className="tri_mm_s24_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS24'>한국어</Link>
                <Link to='/TriplesMemS24Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />JiYeon<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will organize it<br />
                neatly and come to<br />
                you with deep thoughts!</p>
            <img src={Tri_mm_s24_img} alt="JiYeon img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>February 13, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>167cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Swan</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Writing</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>ballet</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>avocado</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                Glow, Visionary Vision, <br />
                                Alphie, moon
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



















