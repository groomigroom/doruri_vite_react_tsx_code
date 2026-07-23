import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS18.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s18_img from '../../triples/main/img/tri_m_memS18.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS18Eng() {
    return (
        <div className="tri_mm_s18_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS18'>한국어</Link>
                <Link to='/TriplesMemS18Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />JooBin<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with a unique<br />
                personality!</p>
            <img src={Tri_mm_s18_img} alt="JooBin img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 16, 2009</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>169cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Bini</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Lisening music</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Taking pictures</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>bread</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                NXT, zenith
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>Intellectual</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};



