import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../DAY6/main/DAY6Main.css';

import MenuEng from '../../HomeEng/MenuEng';

import Day_m_logo from '../../DAY6/main/img/Day_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Day_m_img from './img/day6_m_day6.jpg';

// import Day_m_MemSungjin_img from './img/day6_m_mem_Sungjin.jpg';
// import Day_m_MemYoungK_img from './img/day6_m_mem_Youngk.jpg';
// import Day_m_MemWonpil_img from './img/day6_m_mem_Wonpil.jpg';
// import Day_m_MemDowoon_img from './img/day6_m_mem_Dowoon.jpg';

//191919

export default function DAY6MainEng() {
    return (
        <div className='day_m_full'>
            <MenuEng />
            <img src={Day_m_logo} alt="day6 logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="DAY6 deco" />DAY6<img src={MainH2Deco} alt="DAY6 deco" /></h2>
            <p className='tri_m_intropp'>
                Are you looking for a dream?<br />
                Or are you folding it?<br />
                Dream with &apos;DAY6&apos;!
            </p>
            <img src='' className='tri_m_img' alt='DAY6' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full day_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/DayMemSungjinEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Sungjin" />
                            <h4>Sungjin</h4>
                        </article>
                    </Link>
                    <Link to='/DayMemYoungKEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Young K" />
                            <h4>Young K</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/DayMemWonpilEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Wonpil" />
                            <h4>Wonpil</h4>
                        </article>
                    </Link>
                    <Link to='/DayMemDowoonEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Dowoon" />
                            <h4>Dowoon</h4>
                        </article>
                    </Link>


                </section>


            </section>
        </div>
    );
};


