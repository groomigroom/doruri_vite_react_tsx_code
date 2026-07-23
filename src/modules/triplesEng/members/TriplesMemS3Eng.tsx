import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../triples/members/TriplesMemS3.css';

import MenuEng from '../../HomeEng/MenuEng';
import FooterPartEng from '../../FooterPartEng';

import Tri_mm_s3_img from '../../triples/main/img/tri_m_memS3.jpg'

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TriplesMemS3Eng() {
    return (
        <div className="tri_mm_s3_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TriplesMemS3'>한국어</Link>
                <Link to='/TriplesMemS3Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="triplesS deco" />Lee JiWoo<img src={MainH2Deco} alt="triplesS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                It's not just one shape<br />
                I'm going to show you a lot of my personalities<br />
                Let me show you!</p>
            <img src={Tri_mm_s3_img} alt="Lee JiWoo img" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 10, 2005</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>172.7cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Jyu</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>Baking</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>Hockey</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td><p>Malatang</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>
                                +&#40;KR&#41;ystal Eyes, Acid Eyes,<br />
                                EVOLution, Aria, ∞!, zenith
                            </p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>good</p></td>
                    </tr>
                </tbody>
            </table>
            <FooterPartEng />
        </div>
    );

};




