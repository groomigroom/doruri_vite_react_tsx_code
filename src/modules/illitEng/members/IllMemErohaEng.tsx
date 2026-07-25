import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../illit/members/IllMemEroha.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ill_m_MemEroha_img from '../../illit/main/img/illit_m_mem_Iroha.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IllMemErohaEng() {
    return (
        <div className="ill_mm_eroha_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IllMemEroha'>한국어</Link>
                <Link to='/IllMemErohaEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="illit deco" />Iroha<img src={MainH2Deco} alt="illit deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll prepare<br />
                perfectly and<br />
                go meet you!</p>
            <img src={Ill_m_MemEroha_img} alt="Iroha" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Februry 4, 2008</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>158cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>빼꼬</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>INFJ</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Roha</p></td>
                    </tr>
                    <tr>
                        <td><p>hobby</p></td>
                        <td><p>listening music</p></td>
                    </tr>
                    <tr>
                        <td><p>speciality</p></td>
                        <td>
                            <p>tea ceremony</p></td>
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

