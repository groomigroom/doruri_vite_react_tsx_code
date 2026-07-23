import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS12.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s12_img from '../../triples/main/img/tri_m_memS12.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS12Eng() {
    return (
        <div className="tri_mm_s12_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS12'>한국어</Link>
                <Link to='/TriplesMemS12Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kwak YeonJi<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll always come<br />
                back to you<br />
                with a happy heart!</p>
            <img src={Tri_mm_s12_img} alt="Kwak YeonJi img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 8, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Kwakkwakkwakyeonji</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Game</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Piano</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Rolled Omelet</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                EVOLution, Visionary Vision, <br />
                                zenith
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};


