import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS16.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s16_img from '../../triples/main/img/tri_m_memS16.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS16Eng() {
    return (
        <div className="tri_mm_s16_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS16'>한국어</Link>
                <Link to='/TriplesMemS16Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Mayu<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with a gentle<br />
                and pure heart!</p>
            <img src={Tri_mm_s16_img} alt="Mayu img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 12, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>160cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Goyerin</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Watching drama</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Taking pictures</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Pork belly</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                EVOLution, ∞!, sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>mildness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};


