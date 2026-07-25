import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../ioi/members/IoiMemKimsohye.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ioi_m_MemKimsohye_img from '../../ioi/main/img/ioi_m_mem_Kimsohye.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function IoiMemKimsohyeEng() {
    return (
        <div className="ioi_mm_kimsohye_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/IoiMemKimsohye'>한국어</Link>
                <Link to='/IoiMemKimsohyeEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />Kim So Hye<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_mm_s1_intropp'>
                I will come to you<br />
                with various thoughts<br />
                and my personality!</p>
            <img src={Ioi_m_MemKimsohye_img} alt="Kim So Hye" className='tri_mm_s1_img ioi_mm_kimsohye_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>July 19, 1999</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>165cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>penguin</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>vocal</p></td>
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
