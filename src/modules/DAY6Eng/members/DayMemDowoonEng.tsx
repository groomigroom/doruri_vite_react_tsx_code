import { Link } from 'react-router-dom';

import '../../triples/members/TriplesMemS1.css';
import '../../DAY6/members/DayMemDowoon.css';

import MenuEng from '../../HomeEng/MenuEng';

import Day_mm_dowoon_img from '../../DAY6/main/img/day6_m_mem_Dowoon.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function DayMemDowoonEng() {
    return (
        <div className="day_mm_dowoon_full">
            <MenuEng />
            <section className="home_translate">
                <Link to='/DayMemDowoon'>한국어</Link>
                <Link to='/DayMemDowoonEng' className="on">English</Link>
            </section>
            <h2 className='tri_mm_s1_h2 tri_mm_s1_h2_1'><img src={MainH2Deco} alt="DAY6 deco" />Dowoon<img src={MainH2Deco} alt="DAY6 deco" /></h2>
            <p className='tri_mm_s1_intropp'>
                I'll think hard<br />
                about it and<br />
                prepare good music today!</p>
            <img src={Day_mm_dowoon_img} alt="Dowoon" className='tri_mm_s1_img' />
            <table className='tri_mm_s1_intropa_tb'>
                <tbody>
                    <tr className='tri_mm_s1_intropa_tb_tr1'>
                        <td><p>birth</p></td>
                        <td><p>August 25, 1995</p></td>
                    </tr>
                    <tr>
                        <td><p>height</p></td>
                        <td><p>177.5cm</p></td>
                    </tr>
                    <tr>
                        <td><p>blooe type</p></td>
                        <td><p>O</p></td>
                    </tr>
                    <tr>
                        <td><p>position</p></td>
                        <td><p>drum</p></td>
                    </tr>
                    <tr>
                        <td><p>animal character</p></td>
                        <td><p>DON</p></td>
                    </tr>
                    <tr>
                        <td><p>symbolic animal</p></td>
                        <td><p>puppy</p></td>
                    </tr>
                    <tr>
                        <td><p>nickname</p></td>
                        <td><p>Yoondon</p></td>
                    </tr>
                    <tr>
                        <td><p>units</p></td>
                        <td>
                            <p>x</p></td>
                    </tr>
                    <tr className='tri_mm_s1_intropa_tb_tr9'>
                        <td><p>character</p></td>
                        <td><p>a little sensitive</p></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );

};



