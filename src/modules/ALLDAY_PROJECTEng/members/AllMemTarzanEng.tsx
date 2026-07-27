import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ALLDAY_PROJECT/members/AllMemTarzan.css';

import MenuEng from '../../HomeEng/MenuEng';

import all_mm_tarzan_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Tarzan.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AllMemTarzanEng() {
    EngPage('en', 'ko');

    return (
        <div className="all_mm_tarzan_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/AllMemTarzan'>한국어</Link>
                <Link to='/AllMemTarzanEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="allday project deco" />Tarzzan<img src={MainH2Deco} alt="allday project deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will visit you<br />
                with various<br />
                thoughts and joys!</p>
            <img src={all_mm_tarzan_img} alt="Tarzzan" className='tri_mm_s1_img all_mm_tarzan_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>September 27, 2002</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>179cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>dancer, rapper</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Kkikki</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
