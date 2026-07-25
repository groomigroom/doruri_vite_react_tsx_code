import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../illit/members/IllMemWonhee.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ill_m_MemWonhee_img from '../../illit/main/img/illit_m_mem_Wonhee.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemWonheeEng() {
    return (
        <div className="ill_mm_wonhee_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IllMemWonhee'>한국어</Link>
                <Link to='/IllMemWonheeEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit deco" />Wonhee<img src={MainH2Deco} alt="illit deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll be active as<br />
                an &apos;ILLIT&apos; member<br />
                with a positive mind!</p>
            <img src={Ill_m_MemWonhee_img} alt="Wonhee" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>June 26, 2007</p></td>
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
                        <td><p>animal character</p></td>
                        <td><p>곰돌희</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Woni</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>making keyring</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>talking in one's sleep</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>positive</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

