import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../Hanroro/members/HanMemHanroro.css';

import MenuEng from '../../HomeEng/MenuEng';

//import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function HanMemHanroroEng() {
    return (
        <div className="han_mm_hanroro_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/HanMemHanroro'>한국어</Link>
                <Link to='/HanMemHanroroEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="Hanroro" />Hanroro<img src={MainH2Deco} alt="Hanroro" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will try to<br />
                make a good<br />
                impact on you!
            </p>
            <img src='' alt="Hanroro" className='tri_mm_s1_img' />
            #####
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Novemmer 11, 2000</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>158cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>writing</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td><p>smile well</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>~~roro</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
