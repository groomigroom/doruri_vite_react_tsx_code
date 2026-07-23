import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS10.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s10_img from '../../triples/main/img/tri_m_memS10.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS10Eng() {
    return (
        <div className="tri_mm_s10_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS10'>한국어</Link>
                <Link to='/TriplesMemS10Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Seo DaHyun<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with a kind<br />
                and pure heart!</p>
            <img src={Tri_mm_s10_img} alt="Seo DaHyun img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 8, 2003</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>160.1cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Soda</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Watching cat video</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Eat everything deliciously</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>stir-fried Rice Cake</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                LOVElution, Aria, neptune
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>shyness</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};


