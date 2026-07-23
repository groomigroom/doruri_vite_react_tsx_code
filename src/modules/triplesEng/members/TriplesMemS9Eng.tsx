import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS9.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s9_img from '../../triples/main/img/tri_m_memS9.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS9Eng() {
    return (
        <div className="tri_mm_s9_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS9'>한국어</Link>
                <Link to='/TriplesMemS9Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Kaede<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come back to you<br />
                with a bright and cheerful<br />
                personality and warm heart!</p>
            <img src={Tri_mm_s9_img} alt="Kaede img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 20, 2005</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>159cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Kae</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Game</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Concentration</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Bossam</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                LOVElution, Aria, <br />
                                Visionary Vision, moon
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>Kindness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};



