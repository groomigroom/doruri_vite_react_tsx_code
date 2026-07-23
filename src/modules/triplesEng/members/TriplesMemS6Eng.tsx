import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS6.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s6_img from '../../triples/main/img/tri_m_memS6.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS6Eng() {
    return (
        <div className="tri_mm_s6_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS6'>한국어</Link>
                <Link to='/TriplesMemS6Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kim SooMin<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll work hard on<br />
                &apos;tripleS&apos; since<br />
                I joined with high expectations!</p>
            <img src={Tri_mm_s6_img} alt="Kim SooMin img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 3, 2007</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>161cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Babyee</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Watching movie</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Talk</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>stir-fried Rice Cake</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                +&#40;KR&#41;ystal Eyes, Acid Eyes, <br />
                                EVOLution, ∞!, zenith
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



