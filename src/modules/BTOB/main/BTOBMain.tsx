import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './BTOBMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Btob_m_logo from './img/BTOB_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Btob_m_img from './img/Bto_m_img.jpg';

import Btob_m_SeoEunkwang_img from './img/Bto_mm_Seoeungwang_img.jpg';
import Btob_m_LeeMinhyuk_img from './img/Bto_mm_Leeminhyuk_img.jpg';
import Btob_m_LeeChangsub_img from './img/Bto_mm_Leechangsub_img.jpg';
import Btob_m_LimHyunsik_img from './img/Bto_mm_Limhyunsik_img.jpg';
import Btob_m_Peniel_img from './img/Bto_mm_Peniel_img.jpg';
import Btob_m_YookSungjae_img from './img/Bto_mm_Yooksungjae_img.jpg';

import BtobInstagram_icon_img from '../../triples/main/img/triples_instagram_icon.png';
import BtobYoutube_icon_img from '../../triples/main/img/triples_youtube_icon.png';

//#191919

export default function BTOBMain() {
    return (
        <div className='bto_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/BTOBMain' className="on">한국어</Link>
                <Link to='/BTOBMainEng'>English</Link>
            </section>
            <img src={Btob_m_logo} alt="비투비 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="비투비 로고 꾸미기" />비투비<img src={MainH2Deco} alt="비투비 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;비투비&apos;와 함께<br />
                우리 다시<br />
                꿈을 꿔요 같이!</p>
            <img src={Btob_m_img} className='tri_m_img' alt='비투비' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full bto_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemSeoEunkwang' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Btob_m_SeoEunkwang_img} alt="서은광 이미지" />
                            <div>
                                <h4>서은광</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemLeeMinhyuk' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Btob_m_LeeMinhyuk_img} alt="이민혁 이미지" />
                            <div>
                                <h4>이민혁</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemLeeChangsub' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Btob_m_LeeChangsub_img} alt="이창섭 이미지" />
                            <div>
                                <h4>이창섭</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/BtoMemLimHyunsik' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Btob_m_LimHyunsik_img} alt="임현식 이미지" />
                            <div>
                                <h4>임현식</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemPeniel' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Btob_m_Peniel_img} alt="프니엘 이미지" />
                            <div>
                                <h4>프니엘</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BtoMemYookSungjae' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Btob_m_YookSungjae_img} alt="육성재 이미지" />
                            <div>
                                <h4>육성재</h4>
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

            <h2 className='tri_m_h2 btob_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full btob_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/Bol4Event' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={Btob_m_img} alt="btob event" />
                            <div>
                                <h4>
                                    비투비<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 btob_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full btob_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/idntt' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src='' alt="Bol4SummerPleaseAlbum" />
                            <div>
                                <h4>
                                    Born<br />
                                    Stunner
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 btob_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full btob_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/official_btob" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={BtobInstagram_icon_img} alt="비투비 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@BTOB_COMPANY" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={BtobYoutube_icon_img} alt="비투비 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>


            <FooterPart FooterPartText='ⓒ 비투비 컴퍼니' />
        </div>
    );
};
