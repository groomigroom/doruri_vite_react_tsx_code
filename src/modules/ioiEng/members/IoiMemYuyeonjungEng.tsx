import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemYuyeonjung.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_m_MemYuyeonjung_img from '../../ioi/main/img/ioi_m_mem_Yuyunjung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemYuyeonjungEng() {
    return (
        <div className="ioi_mm_yuyeonjung_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemYuyeonjung'>한국어</Link>
                <Link to='/IoiMemYuyeonjungEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="ioi deco" />YEONJUNG<img src={MainH2Deco} alt="ioi deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with fun<br />
                and excitement!</p>
            <img src={Ioi_m_MemYuyeonjung_img} alt="YEONJUNG" className='tri_mm_s1_img ioi_mm_yuyeonjung_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>August 3, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>166cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Dyung</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main vocal</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>bright</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};
