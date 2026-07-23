import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS4.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s4_img from '../../triples/main/img/tri_m_memS4.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS4Eng() {
    return (
        <div className="tri_mm_s4_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS4'>한국어</Link>
                <Link to='/TriplesMemS4Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kim ChaeYeon<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                With a new mindset<br />
                I'll show you my brighter side<br />
                let me show you!</p>
            <img src={Tri_mm_s4_img} alt="Kim ChaeYeon img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 4, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>170.8cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Chaeyommi</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Watching movie</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Acting</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Beef brisket</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                +&#40;KR&#41;ystal Eyes, Acid Eyes, <br />
                                EVOLution, Aria, ∞!, sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div >
    );

};






