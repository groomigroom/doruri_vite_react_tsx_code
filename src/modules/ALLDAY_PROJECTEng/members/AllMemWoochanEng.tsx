import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ALLDAY_PROJECT/members/AllMemWoochan.css';

import MenuEng from '../../HomeEng/MenuEng';

import all_mm_woochan_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Woochan.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemWoochanEng() {
    EngPage('en', 'ko');

    return (
        <div className="all_mm_woochan_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AllMemWoochan'>한국어</Link>
                <Link to='/AllMemWoochanEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project deco" />Woochan<img src={MainH2Deco} alt="allday project deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll be there to<br />
                meet you in a lively<br />
                and bright way!</p>
            <img src={all_mm_woochan_img} alt="Woochan" className='tri_mm_s1_img all_mm_woochan_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 20, 2005</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>181cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>rapper, vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Santa</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
