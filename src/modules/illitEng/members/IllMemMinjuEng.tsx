import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../illit/members/IllMemMinju.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ill_m_MemMinju_img from '../../illit/main/img/illit_m_mem_Minju.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemMinjuEng() {
    EngPage('en', 'ko');

    return (
        <div className="ill_mm_minju_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IllMemMinju'>한국어</Link>
                <Link to='/IllMemMinjuEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit deco" />Minju<img src={MainH2Deco} alt="illit deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll be considerate of<br />
                the members and<br />
                get along well with them!</p>
            <img src={Ill_m_MemMinju_img} alt="Minju" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>May 11, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>163cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>Okki</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISTJ-A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Jju</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>coloring book</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>violin</p></td>
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



