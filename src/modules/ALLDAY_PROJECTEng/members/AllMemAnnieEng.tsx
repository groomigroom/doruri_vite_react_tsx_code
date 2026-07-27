import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ALLDAY_PROJECT/members/AllMemAnnie.css';

import MenuEng from '../../HomeEng/MenuEng';

import all_mm_annie_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Annie.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemAnnieEng() {
    EngPage('en', 'ko');

    return (
        <div className="all_mm_annie_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AllMemAnnie'>한국어</Link>
                <Link to='/AllMemAnnieEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project deco" />Annie<img src={MainH2Deco} alt="allday project deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I respect the various<br />
                opinions of the members<br />
                and I will do my best!</p>
            <img src={all_mm_annie_img} alt="Annie" className='tri_mm_s1_img all_mm_annie_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 23, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ESTJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Annie older sister</p></td>
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
