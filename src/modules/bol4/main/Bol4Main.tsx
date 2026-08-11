import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/main/TriplesMain.css';
import './Bol4Main.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Bol_m_logo from './img/Bol_m_logo.png';
import MainH2Deco from '../../img/main_h2_deco.png';
import Bol_m_img from './BeforeMain/img/bol4_m_mem_Anjiyoung_7_24.jpg';

import Bol4SummerPleaseAlbum_img from '../albums/img/Bol4SummerPleaseAlbum_img.jpg';

import Bol4Instagram_icon_img from '../../triples/main/img/triples_instagram_icon.png';
import Bol4Youtube_icon_img from '../../triples/main/img/triples_youtube_icon.png';

//191919
//ffffff

export default function Bol4Main() {
    DoruriDocumentTitle('볼빨간사춘기');

    return (
        <div className='bol_m_full'>
            <Menu />
            <img src={Bol_m_logo} alt="볼빨간사춘기 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" />볼빨간사춘기<img src={MainH2Deco} alt="볼빨간사춘기 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;볼빨간사춘기&apos;와 함께<br />
                더운 여름에<br />
                힘내 보아요!</p>
            <img src={Bol_m_img} className='tri_m_img' alt='볼빨간사춘기' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full bol_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/BolMemAnjiyoung' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Bol_m_img} alt="안지영 이미지" />
                            <div>
                                <h4>안지영</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile bol_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/BolMemAnjiyoung' className='tri_m_mem_a'>
                            <img src={Bol_m_img} alt="안지영 이미지" />
                            <h4>안지영</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <h2 className='tri_m_h2 bol4_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full bol4_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/Bol4Event' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={Bol_m_img} alt="bol4 event" />
                            <div>
                                <h4>
                                    여름아<br />
                                    부탁해<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 bol4_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full bol4_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/Bol4SummerPleaseAlbum' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={Bol4SummerPleaseAlbum_img} alt="Bol4SummerPleaseAlbum" />
                            <div>
                                <h4>
                                    여름아<br />
                                    부탁해
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 bol4_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full bol4_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/official_bol4" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={Bol4Instagram_icon_img} alt="볼빨간사춘기 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@BOL4OFFICIAL" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={Bol4Youtube_icon_img} alt="볼빨간사춘기 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <Link to='/Bol4Main_7_23' className='tri_mm_s1_before_links'>이전 페이지 보기</Link>
            <FooterPart FooterPartText='ⓒ 켄버스' />
        </div>
    );
};
