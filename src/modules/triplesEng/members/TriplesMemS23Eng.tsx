import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS23.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s23_img from '../../triples/main/img/tri_m_memS23.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS23Eng() {
    return (
        <div className="tri_mm_s23_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS23'>한국어</Link>
                <Link to='/TriplesMemS23Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />SeoAh<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will visit you<br />
                with a relaxed<br />
                and sincere heart!</p>
            <img src={Tri_mm_s23_img} alt="SeoAh img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>June 11, 2010</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>158.4cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Seobaby</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Watching OTT</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Taekwondo</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>stir-fried Rice Cake</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                Glow, neptune
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>strong mentality</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};



















