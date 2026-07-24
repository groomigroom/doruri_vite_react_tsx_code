import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS20.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s20_img from '../../triples/main/img/tri_m_memS20.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS20Eng() {
    return (
        <div className="tri_mm_s20_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS20'>한국어</Link>
                <Link to='/TriplesMemS20Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Park ShiOn<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'm calm, but I'm going to work<br />
                on &apos;tripleS&apos; with a personality<br />
                that harmonizes well with my surroundings!</p>
            <img src={Tri_mm_s20_img} alt="Park ShiOn img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>April 3, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>167cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Breadshion</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Visiting good restaurants</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Making video</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Most of the food</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                NXT, ∞!, <br />
                                Alphie, moon
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>planned</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};



















