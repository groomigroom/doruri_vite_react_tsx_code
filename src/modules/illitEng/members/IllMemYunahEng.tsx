import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../illit/members/IllMemYunah.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ill_m_MemYunah_img from '../../illit/main/img/illit_m_mem_Yunah.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemYunahEng() {
    EngPage('en', 'ko');

    return (
        <div className="ill_mm_yunah_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IllMemYunah'>한국어</Link>
                <Link to='/IllMemYunahEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit deco" />Yunah<img src={MainH2Deco} alt="illit deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll go meet you<br />
                seriously and<br />
                confidently!</p>
            <img src={Ill_m_MemYunah_img} alt="Yunah" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>January 15, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>168cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>Chiti</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ENFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Nochuri</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>singing a children's song</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>model walking</p></td>
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



