import { Link } from 'react-router-dom';
import { EngPage } from '../../HomeEng/EngPage';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemGangmina.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_m_MemGangmina_img from '../../ioi/main/img/ioi_m_mem_Gangmina.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemGangminaEng() {
    EngPage('en', 'ko');

    return (
        <div className="ioi_mm_gangmina_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemGangmina'>한국어</Link>
                <Link to='/IoiMemGangminaEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ioi deco" />Kang Mina<img src={MainH2Deco} alt="ioi deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with a bright expression<br />
                and a positive mind!</p>
            <img src={Ioi_m_MemGangmina_img} alt="Kang Mina" className='tri_mm_s1_img ioi_mm_gangmina_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>December 4, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>162cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Ggangmina</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>vocal</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness?</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

