import { Link } from 'react-router-dom';

import '../../idntt/members/Idn_m_memid5.css';

import MenuEng from '../../HomeEng/MenuEng';

// import Idn_mm_memid5_img from '../main/img/tri_m_memS1.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function Idn_m_memid5Eng() {
    return (
        <div className="idn_mm_id4_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/Idn_m_memid5'>한국어</Link>
                <Link to='/Idn_m_memid5Eng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="idntt deco" />leejaeyoung<img src={MainH2Deco} alt="idntt deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll be comfortable with<br />
                the members and do my<br />
                best for &apos;idntt&apos; promotions!
            </p>
            <img src='' alt="leejaeyoung" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>October 3, 2007</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>185cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blood type</p></td>
                        <td><p>A</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td><p>unevermet</p></td>
                    </tr>
                    <tr>
                        <td><p>MBTI</p></td>
                        <td><p>ISFP</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic color</p></td>
                        <td><p>#b8ace8</p></td>
                    </tr>
                    <tr>
                        <td><p>character</p></td>
                        <td><p>an abundance of sensitivity</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>nickname</p></td>
                        <td><p>Hamnyangee</p></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};









