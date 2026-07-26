import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../BTS/members/BTSMemJungKook.css';

import MenuEng from '../../HomeEng/MenuEng';

//import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemJungKookEng() {
    return (
        <div className="bts_mm_jungkook_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/BTSMemJungKook'>한국어</Link>
                <Link to='/BTSMemJungKookEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTS deco" />Jung Kook<img src={MainH2Deco} alt="BTS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Let's run in<br />
                a better direction<br />
                with &apos;Jung Kook&apos;!
            </p>
            <img src='' alt="Jung Kook" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 1, 1997</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>177cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main vocal, lead dancer, sub rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Golden youngest</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>emotional</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
