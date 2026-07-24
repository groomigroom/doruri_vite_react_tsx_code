import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS22.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s22_img from '../../triples/main/img/tri_m_memS22.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS22Eng() {
    return (
        <div className="tri_mm_s22_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS22'>한국어</Link>
                <Link to='/TriplesMemS22Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Sullin<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll visit several<br />
                buns with a gentle<br />
                and calm mind!</p>
            <img src={Tri_mm_s22_img} alt="Sullin img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 30, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>170cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Thai princess</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Computer games</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Speaking English</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Thailand food</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                Glow, moon
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



















