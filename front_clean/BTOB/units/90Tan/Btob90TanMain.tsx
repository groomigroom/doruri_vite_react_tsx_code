import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../../DoruriDocumentTitle';

import '../../../triples/main/TriplesMain.css';
import './Btob90TanMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

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

export default function Btob90TanMain() {
    DoruriDocumentTitle('구공탄');

    return (
        <div className='bto_90Tan_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/Btob90TanMain' className="on">한국어</Link>
                <Link to='/Btob90TanMainEng'>English</Link>
            </section>
            <img src='' alt="구공탄 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'>
                <img src={MainH2Deco} alt="구공탄 로고 꾸미기" />구공탄<img src={MainH2Deco} alt="구공탄 꾸미기" />
            </h2>
            <p className='tri_m_intropp'>
                &apos;구공탄&apos;과 함께<br />
                오늘도 열심히<br />
                달려 봐요!
            </p>
            <img src='' className='tri_m_img' alt='구공탄' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full bto_90Tan_m_mem_tr_full'>
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
            <FooterPart FooterPartText='ⓒ 비투비 컴퍼니' />
        </div>
    );
};
