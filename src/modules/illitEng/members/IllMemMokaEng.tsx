import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../illit/members/IllMemMoka.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ill_m_MemMoka_img from '../../illit/main/img/illit_m_mem_Moka.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemMokaEng() {
    return (
        <div className="ill_mm_moka_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IllMemMoka'>한국어</Link>
                <Link to='/IllMemMokaEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit deco" />Moka<img src={MainH2Deco} alt="illit deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll go and meet you<br />
                with a smile with<br />
                a positive heart!</p>
            <img src={Ill_m_MemMoka_img} alt="Moka" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 8, 2004</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>B</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>Mokalatte</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Kimmokhwa</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>watching movie</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>sleeping long time</p></td>
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

