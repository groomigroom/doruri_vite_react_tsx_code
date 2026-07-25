import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemJeonsomi.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_m_MemJeonsomi_img from '../../ioi/main/img/ioi_m_mem_Jeonsomi.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemJeonsomiEng() {
    return (
        <div className="ioi_mm_jeonsomi_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemJeonsomi'>한국어</Link>
                <Link to='/IoiMemJeonsomiEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ioi deco" />Jeon Somi<img src={MainH2Deco} alt="ioi deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll keep my mental<br />
                strength and<br />
                come to you!</p>
            <img src={Ioi_m_MemJeonsomi_img} alt="Jeon Somi" className='tri_mm_s1_img ioi_mm_jeonsomi_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 9, 2001</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>173cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Vitasom</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>center</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>activeness</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

