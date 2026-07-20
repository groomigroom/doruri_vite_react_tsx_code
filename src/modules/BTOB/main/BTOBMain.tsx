import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './BTOBMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

// import Tws_m_logo from './img/Tws_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import Tws_m_img from './img/tws_m_tws.jpg';

// import Tws_m_MemSinyu_img from './img/tws_m_mem_Sinyu.jpg';
// import Tws_m_MemDohun_img from './img/tws_m_mem_Dohun.jpg';
// import Tws_m_MemYoungjae_img from './img/tws_m_mem_Youngjae.jpg';
// import Tws_m_MemHanjin_img from './img/tws_m_mem_Hanjin.jpg';
// import Tws_m_MemJihun_img from './img/tws_m_mem_Jihun.jpg';
// import Tws_m_MemGyungmin_img from './img/tws_m_mem_Kyungmin.jpg';

//#191919

export default function BTOBMain() {
    return (
        <div className='bto_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/BTOBMain' className="on">한국어</Link>
                <Link to='/BTOBMainEng'>English</Link>
            </section>
            <img src='' alt="비투비 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="비투비 로고 꾸미기" />비투비<img src={MainH2Deco} alt="비투비 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;비투비&apos;와 함께<br />
                우리 다시<br />
                꿈을 꿔요 같이!</p>
            <img src='' className='tri_m_img' alt='비투비' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemSeoEunkwang' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="서은광 이미지" />
                            <div>
                                <h4>서은광</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemLeeMinhyuk' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="이민혁 이미지" />
                            <div>
                                <h4>이민혁</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemLeeChangsub' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="이창섭 이미지" />
                            <div>
                                <h4>이창섭</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemLimHyunsik' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="임현식 이미지" />
                            <div>
                                <h4>임현식</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemPeniel' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="프니엘 이미지" />
                            <div>
                                <h4>프니엘</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemYookSungjae' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="육성재 이미지" />
                            <div>
                                <h4>육성재</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>

            <FooterPart />
        </div>
    );
};


