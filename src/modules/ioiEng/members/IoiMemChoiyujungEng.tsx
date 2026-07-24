import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemChoiyujung.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_mm_MemChoiyujung_img from '../../ioi/main/img/ioi_m_mem_Choiyujung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemChoiyujungEng() {
    return (
        <div className="ioi_mm_choiyujung_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemChoiyujung'>한국어</Link>
                <Link to='/IoiMemChoiyujungEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ioi deco" />Choi Yoojung<img src={MainH2Deco} alt="ioi deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with my unique<br />
                thoughts and heart!</p>
            <img src={Ioi_mm_MemChoiyujung_img} alt="Choi Yoojung" className='tri_mm_s1_img ioi_mm_choiyujung_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>November 12, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>159cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Yudaeng</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main dancer</p></td>
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
