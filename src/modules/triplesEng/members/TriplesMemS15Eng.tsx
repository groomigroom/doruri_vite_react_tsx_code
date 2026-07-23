import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS15.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s15_img from '../../triples/main/img/tri_m_memS15.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS15Eng() {
    return (
        <div className="tri_mm_s15_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS15'>한국어</Link>
                <Link to='/TriplesMemS15Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Xinyu<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come back<br />
                to you with<br />
                deep consideration!</p>
            <img src={Tri_mm_s15_img} alt="Xinyu img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 25, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>174cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Yeoxinyu</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Watching movie</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Dancing</p></td>
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
                                sun
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>Aggressive</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );
};


