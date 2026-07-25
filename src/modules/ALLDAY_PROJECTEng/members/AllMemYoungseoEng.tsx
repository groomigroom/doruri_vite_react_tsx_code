import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ALLDAY_PROJECT/members/AllMemYoungseo.css';

import MenuEng from '../../HomeEng/MenuEng';

import all_mm_youngseo_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Youngseo.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemYoungseoEng() {
    return (
        <div className="all_mm_youngseo_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AllMemYoungseo'>한국어</Link>
                <Link to='/AllMemYoungseoEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project deco" />Youngseo<img src={MainH2Deco} alt="allday project deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll prepare calmly<br />
                and diligently<br />
                and go meet you!</p>
            <img src={all_mm_youngseo_img} alt="Youngseo" className='tri_mm_s1_img all_mm_youngseo_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 13, 2005</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>165.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Zero</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>diligence</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
