import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS14.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s14_img from '../../triples/main/img/tri_m_memS14.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS14Eng() {
    return (
        <div className="tri_mm_s14_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS14'>한국어</Link>
                <Link to='/TriplesMemS14Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Park SoHyun<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I like creative activities,<br />
                so I'll write songs<br />
                and dance!</p>
            <img src={Tri_mm_s14_img} alt="Park SoHyun img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 13, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>167.3cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Teacher Park</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Reading book</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Writing</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>stir-fried Rice Cake</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                LOVElution, Visionary Vision, <br />
                                moon
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>calmness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};


