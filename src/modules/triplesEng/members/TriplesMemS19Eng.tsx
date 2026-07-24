import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS19.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s19_img from '../../triples/main/img/tri_m_memS19.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS19Eng() {
    return (
        <div className="tri_mm_s19_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS19'>한국어</Link>
                <Link to='/TriplesMemS19Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Jeong HaYeon<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with a free<br />
                and active mind!</p>
            <img src={Tri_mm_s19_img} alt="Jeong HaYeon img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>August 1, 2007</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Hedgehog</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Writing</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Making dolphin sounds</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Sea food</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                NXT, Alphie, zenith
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>freewheeling</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};




