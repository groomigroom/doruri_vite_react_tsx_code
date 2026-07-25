import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../10CM/members/TenMemGwonjungyeol.css';

import MenuEng from '../../HomeEng/MenuEng';

import Ten_mm_gwonjungyeol_img from '../../10CM/main/img/10cm_m_mem_Gwonjungyeol.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TenMemGwonjungyeolEng() {
    return (
        <div className="ten_mm_gwonjungyeol_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/TenMemGwonjungyeol'>한국어</Link>
                <Link to='/TenMemGwonjungyeolEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="10CM deco" />Kwon Jeongyeol<img src={MainH2Deco} alt="10CM deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll go to you<br />
                with soft and<br />
                unique songs!</p>
            <img src={Ten_mm_gwonjungyeol_img} alt="Kwon Jeongyeol" className='tri_mm_s1_img ten_mm_gwonjungyeol_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>March 1, 1983</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>172cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Angelyeol</p></td>
                    </tr>
                    <tr>
                        <td><p>position 1</p></td>
                        <td><p>vocal</p></td>
                    </tr>
                    <tr>
                        <td><p>position 2</p></td>
                        <td><p>guitar</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP-T</p></td>
                    </tr>
                    <tr>
                        <td><p>favorite food</p></td>
                        <td>
                            <p>ramen</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>??</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};



