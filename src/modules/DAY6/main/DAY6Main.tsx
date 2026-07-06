import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './DAY6Main.css';

import Menu from '../../Menu';

import Day_m_logo from './img/Day_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Day_m_img from './img/day6_m_day6.jpg';

import Day_m_MemSungjin_img from './img/day6_m_mem_Sungjin.jpg';
import Day_m_MemYoungK_img from './img/day6_m_mem_Youngk.jpg';
import Day_m_MemWonpil_img from './img/day6_m_mem_Wonpil.jpg';
import Day_m_MemDowoon_img from './img/day6_m_mem_Dowoon.jpg';

//191919

export default function DAY6Main() {
    return (
        <div className='day_m_full'>
            <Menu />
            <img src={Day_m_logo} alt="day6 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="DAY6 꾸미기" />DAY6<img src={MainH2Deco} alt="DAY6 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                혹시 꿈을 찾고 있나요?<br />
                아니면 접고 있나요?<br />
                &apos;DAY6&apos;와 함께 꿈을 꿔봐요!
            </p>
            <img src={Day_m_img} className='tri_m_img' alt='DAY6' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full day_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/DayMemSungjin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Day_m_MemSungjin_img} alt="성진 이미지" />
                            <h4>성진</h4>
                        </article>
                    </Link>
                    <Link to='/DayMemYoungK' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Day_m_MemYoungK_img} alt="Young K 이미지" />
                            <h4>Young K</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/DayMemWonpil' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Day_m_MemWonpil_img} alt="원필 이미지" />
                            <h4>원필</h4>
                        </article>
                    </Link>
                    <Link to='/DayMemDowoon' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Day_m_MemDowoon_img} alt="도운 이미지" />
                            <h4>도운</h4>
                        </article>
                    </Link>


                </section>


            </section>
        </div>
    );
};
