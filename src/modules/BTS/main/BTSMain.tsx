import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/main/TriplesMain.css'
import './BTSMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bts_m_logo from './img/BTS_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Bts_m_img from './img/Bts_m_img.jpg';

import Bts_RM_m_img from './img/Bts_mm_Rm_img.jpg';
import Bts_Jin_m_img from './img/Bts_mm_Jin_img.jpg';
import Bts_SUGA_m_img from './img/Bts_mm_Suga_img.jpg';
import Bts_Jhope_m_img from './img/Bts_mm_Jhope_img.jpg';
import Bts_Jimin_m_img from './img/Bts_mm_Jimin_img.jpg';
import Bts_V_m_img from './img/Bts_mm_V_img.jpg';
import Bts_JungKook_m_img from './img/Bts_mm_Jungkook_img.jpg';



//#191919


export default function BTSMain() {
    DoruriDocumentTitle('방탄소년단');

    return (
        <div className='bts_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMain' className="on">한국어</Link>
                <Link to='/BTSMainEng'>English</Link>
            </section>
            <img src={Bts_m_logo} alt="방탄소년단 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'>
                <img src={MainH2Deco} alt="방탄소년단 꾸미기" />방탄소년단<img src={MainH2Deco} alt="방탄소년단 꾸미기" />
            </h2>
            <p className='tri_m_intropp'>
                #####
                &apos;Stray Kids&apos;와 함께<br />
                시련 속에서도 계속<br />
                running out!</p>
            <img src={Bts_m_img} className='tri_m_img' alt='방탄소년단' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full bts_m_mem_tr_full'>

                <section className='bts_m_mem_tr4'>
                    <Link to='/BTSMemRM' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Bts_RM_m_img} alt="RM 이미지" />
                            <div>
                                <h4>RM</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BTSMemJin'>
                        <article className='tri_m_mem'>
                            <img src={Bts_Jin_m_img} alt="진 이미지" />
                            <div>
                                <h4>진</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemSUGA'>
                        <article className='tri_m_mem'>
                            <img src={Bts_SUGA_m_img} alt="슈가 이미지" />
                            <div>
                                <h4>슈가</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemJhope'>
                        <article className='tri_m_mem'>
                            <img src={Bts_Jhope_m_img} alt="제이홉 이미지" />
                            <div>
                                <h4>제이홉</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='bts_m_mem_tr3'>
                    <Link to='/BTSMemJimin'>
                        <article className='tri_m_mem'>
                            <img src={Bts_Jimin_m_img} alt="지민 이미지" />
                            <div>
                                <h4>지민</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemV'>
                        <article className='tri_m_mem'>
                            <img src={Bts_V_m_img} alt="뷔 이미지" />
                            <div>
                                <h4>뷔</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemJungKook'>
                        <article className='tri_m_mem'>
                            <img src={Bts_JungKook_m_img} alt="정국 이미지" />
                            <div>
                                <h4>정국</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile bts_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/BTSMemRM' className='tri_m_mem_a'>
                            <img src='' alt="RM 이미지" />
                            <h4>RM</h4>
                        </Link>
                        <Link to='/BTSMemJin'>
                            <img src='' alt="진 이미지" />
                            <h4>진</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/BTSMemSUGA'>
                            <img src='' alt="슈가 이미지" />
                            <h4>슈가</h4>
                        </Link>

                        <Link to='/BTSMemJhope'>
                            <img src='' alt="제이홉 이미지" />
                            <h4>제이홉</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/BTSMemJimin'>
                            <img src='' alt="지민 이미지" />
                            <h4>지민</h4>
                        </Link>

                        <Link to='/BTSMemV'>
                            <img src='' alt="뷔 이미지" />
                            <h4>뷔</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/BTSMemJungKook'>
                            <img src='' alt="정국 이미지" />
                            <h4>정국</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <h2 className='tri_m_h2 bts_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full bts_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/HanroroEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src='' alt="bts event" />
                            <div>
                                <h4>
                                    bts<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 bts_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full bts_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/HanroroJpopRemakeVol2Album' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src='' alt="bts" />
                            <div>
                                <h4>
                                    bts<br />
                                    bts<br />
                                    Vol2
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
