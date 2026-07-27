import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../RESCENE/members/ResMemMinami.css';

import MenuEng from '../../HomeEng/MenuEng';

import Res_mm_Minami_img from '../../RESCENE/main/img/rescene_m_mem_Minami.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function ResMemMinamiEng() {
    EngPage('en', 'ko');

    return (
        <div className="res_mm_minami_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/ResMemMinami'>한국어</Link>
                <Link to='/ResMemMinamiEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="RESCENE deco" />Minami<img src={MainH2Deco} alt="RESCENE deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will work harder<br />
                with grit and perseverance<br />
                and go meet you!</p>
            <img src={Res_mm_Minami_img} alt="Minami" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 11, 2006</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>minamee</p></td>
                    </tr>
                    <tr>
                        <td><p>remini</p></td>
                        <td><p>ming</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>seal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>??</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>affectionate</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};



