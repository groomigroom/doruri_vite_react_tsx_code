import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../BTS/members/BTSMemSUGA.css';

import MenuEng from '../../HomeEng/MenuEng';

//import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemSUGAEng() {
    return (
        <div className="bts_mm_suga_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/BTSMemSUGA'>한국어</Link>
                <Link to='/BTSMemSUGAEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTS deco" />SUGA<img src={MainH2Deco} alt="BTS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Let's have faith<br />
                in ourselves<br />
                with &apos;SUGA&apos;!
            </p>
            <img src='' alt="SUGA" className='tri_mm_s1_img' />
            #####
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 9, 1993</p></td>
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
                        <td><p>position</p></td>
                        <td><p>lead rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>gloss</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>kindness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
