import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../BTS/members/BTSMemJhope.css';

import MenuEng from '../../HomeEng/MenuEng';

//import Tri_mm_s1_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function BTSMemJhopeEng() {
    return (
        <div className="bts_mm_jhope_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/BTSMemJhope'>한국어</Link>
                <Link to='/BTSMemJhopeEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="BTS deco" />j-hope<img src={MainH2Deco} alt="BTS deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                Follow your reaction<br />
                with &apos;j-hope&apos;<br />
                and go anywhere!
            </p>
            <img src='' alt="j-hope" className='tri_mm_s1_img' />
            #####
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 18, 1994</p></td>
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
                        <td><p>main dancer, sub rapper, sub vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Hobi</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};
