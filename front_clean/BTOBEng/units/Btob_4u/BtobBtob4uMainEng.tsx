import { Link } from 'react-router-dom';
import { EngPage } from '../../../HomeEng/EngPage';

import '../../../triples/main/TriplesMain.css';
import '../../../BTOB/units/Btob_4u/BtobBtob4uMain.css';

import MenuEng from '../../../HomeEng/MenuEng';
import FooterPartEng from '../../../FooterPartEng';

// import Tws_m_logo from './img/Tws_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
// import Tws_m_img from './img/tws_m_tws.jpg';

// import Tws_m_MemSinyu_img from './img/tws_m_mem_Sinyu.jpg';
// import Tws_m_MemDohun_img from './img/tws_m_mem_Dohun.jpg';
// import Tws_m_MemYoungjae_img from './img/tws_m_mem_Youngjae.jpg';
// import Tws_m_MemHanjin_img from './img/tws_m_mem_Hanjin.jpg';
// import Tws_m_MemJihun_img from './img/tws_m_mem_Jihun.jpg';
// import Tws_m_MemGyungmin_img from './img/tws_m_mem_Kyungmin.jpg';

//#191919

export default function BtobBtob4uMainEng() {
    EngPage('en', 'ko');

    return (
        <div className='bto_Btob4u_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/BtobBtob4uMain'>한국어</Link>
                <Link to='/BtobBtob4uMainEng' className="on">English</Link>
            </section>
            <img src='' alt="비투비 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="BTOB 4U deco" />BTOB 4U<img src={MainH2Deco} alt="BTOB 4U deco" /></h2>
            <p className='tri_m_intropp'>
                Let&apos;s not think<br />
                about fear, together<br />
                with &apos;BTOB 4U&apos;!
            </p>
            <img src='' className='tri_m_img' alt='BTOB 4U' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full bto_Btob4u_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemSeoEunkwangEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Seo Eunkwang" />
                            <div>
                                <h4>Seo Eunkwang</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemLeeMinhyukEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Lee Minhyuk" />
                            <div>
                                <h4>Lee Minhyuk</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemLeeChangsubEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Lee Changsub" />
                            <div>
                                <h4>Lee Changsub</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemPenielEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Peniel" />
                            <div>
                                <h4>Peniel</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile bto_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/BtoMemSeoEunkwang' className='tri_m_mem_a'>
                            <img src='' alt="서은광 이미지" />
                            <h4>서은광</h4>
                        </Link>
                        <Link to='/BtoMemLeeMinhyuk' className='tri_m_mem_a'>
                            <img src='' alt="이민혁 이미지" />
                            <h4>이민혁</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/BtoMemLeeChangsub' className='tri_m_mem_a'>
                            <img src='' alt="이창섭 이미지" />
                            <h4>이창섭</h4>
                        </Link>
                        <Link to='/BtoMemLimHyunsik' className='tri_m_mem_a'>
                            <img src='' alt="임현식 이미지" />
                            <h4>임현식</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/BtoMemPeniel' className='tri_m_mem_a'>
                            <img src='' alt="프니엘 이미지" />
                            <h4>프니엘</h4>
                        </Link>
                        <Link to='/BtoMemYookSungjae' className='tri_m_mem_a'>
                            <img src='' alt="육성재 이미지" />
                            <h4>육성재</h4>
                        </Link>
                    </section>
                </section>

            </section>
            <FooterPartEng FooterPartEngText='ⓒ BTOB Company' />
        </div>
    );
};
