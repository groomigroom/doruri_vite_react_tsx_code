import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../../triples/main/TriplesMain.css'
import './Day6EvenOfDayMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import Day6EvenOfDay_m_logo from './img/Day6EvenOfDay_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import Day6EvenOfDay_m_img from './img/Day6EvenOfDay_m_img.jpg';

import Day6EvenOfDay_youngk_img from './img/Day6EvenOfDay_mem_youngk_img.jpg';
import Day6EvenOfDay_wonpil_img from './img/Day6EvenOfDay_mem_wonpil_img.jpg';
import Day6EvenOfDay_dowoon_img from './img/Day6EvenOfDay_mem_dowoon_img.jpg';


//#191919

export default function Day6EvenOfDayMain() {
    DoruriDocumentTitle('Even of Day');

    return (
        <div className='day_EvenOfDay_m_full'>
            <Menu />
            <img src={Day6EvenOfDay_m_logo} alt="DAY6 &#40;Even of Day&#41; 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'>
                <img src={MainH2Deco} alt="DAY6 &#40;Even of Day&#41; 꾸미기" />DAY6 &#40;Even of Day&#41;<img src={MainH2Deco} alt="DAY6 &#40;Even of Day&#41; 꾸미기" />
            </h2>
            <p className='tri_m_intropp'>
                &apos;DAY6 &#40;Even of Day&#41;&apos;와 함께<br />
                흩어지는 맘이 있어도<br />
                힘내 보아요!
            </p>
            <img src={Day6EvenOfDay_m_img} className='tri_m_img' alt='Even of Day' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full day_EvenOfDay_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/DayMemWonpil' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Day6EvenOfDay_wonpil_img} alt="원필 이미지" />
                            <div>
                                <h4>원필</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/DayMemDowoon' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Day6EvenOfDay_dowoon_img} alt="도운 이미지" />
                            <div>
                                <h4>도운</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/DayMemYoungK' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Day6EvenOfDay_youngk_img} alt="Young K 이미지" />
                            <div>
                                <h4>Young K</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 보기용 */}
            {/* <section className="tri_m_mem_tr_full_mobile epi_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/EpiMemTablo' className='tri_m_mem_a'>
                            <img src="" alt="타블로 이미지" />
                            <h4>타블로</h4>
                        </Link>
                        <Link to='/EpiMemTwokutz' className='tri_m_mem_a'>
                            <img src="" alt="투컷 이미지" />
                            <h4>투컷</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/EpiMemMithra' className='tri_m_mem_a'>
                            <img src="" alt="미쓰라 이미지" />
                            <h4>미쓰라</h4>
                        </Link>
                    </section>
                </section>

            </section> */}
            <FooterPart FooterPartText='ⓒ JYP엔터테인먼트' />
        </div >
    );
};


