import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../Yena/members/YenaMem.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Yen_mm_yena_img from '../main/img/10cm_m_mem_Gwonjungyeol.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function YenaMemEng() {
    EngPage('en', 'ko');

    return (
        <div className="yen_mm_yena_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/YenaMem'>한국어</Link>
                <Link to='/YenaMemEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="YENA" />YENA<img src={MainH2Deco} alt="YENA" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll go<br />
                meet you with<br />
                great affinity!</p>
            <img src='' alt="YENA" className='tri_mm_s1_img yen_mm_yena_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 29, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>light stick</p></td>
                        <td><p>Goomibong</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>duck</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>game</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>acrostic poem</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>sociable</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};





