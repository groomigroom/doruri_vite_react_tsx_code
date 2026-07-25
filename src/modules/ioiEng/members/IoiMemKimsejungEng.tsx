import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemKimsejung.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_m_MemKimsejung_img from '../../ioi/main/img/ioi_m_mem_Kimsejung.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemKimsejungEng() {
    return (
        <div className="ioi_mm_kimsejung_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemKimsejung'>한국어</Link>
                <Link to='/IoiMemKimsejungEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />Kim Sejeong<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with sentimental<br />
                and diverse thoughts!</p>
            <img src={Ioi_m_MemKimsejung_img} alt="Kim Sejeong" className='tri_mm_s1_img ioi_mm_kimsejung_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>Auguts 28, 1996</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>164cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>AB</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Godsejung</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>main vocal</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>sociable?</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

