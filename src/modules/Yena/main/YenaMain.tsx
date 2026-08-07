import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './YenaMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Yena_m_logo from './img/Yena_m_logo_191919.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Yena_m_img from './img/Yen_m_img.jpg';

import YenaBloomingWingsAlbum_img from '../albums/img/YenaBloomingWingsAlbum_img.jpg';

import YenaInstagram_icon_img from '../../triples/main/img/triples_instagram_icon.png';
import YenaYoutube_icon_img from '../../triples/main/img/triples_youtube_icon.png';

//#191919

export default function YenaMain() {
    return (
        <div className='yen_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/YenaMain' className="on">한국어</Link>
                <Link to='/YenaMainEng'>English</Link>
            </section>
            <img src={Yena_m_logo} alt="최예나 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="최예나 꾸미기" />최예나<img src={MainH2Deco} alt="최예나 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;최예나&apos;와 함께<br />
                ca-ca-catch<br />
                my heart!
            </p>
            <img src={Yena_m_img} className='tri_m_img yen_m_img' alt='최예나' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 소개 ▪</h2>
            <section className='tri_m_mem_tr_full yen_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/YenaMem' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Yena_m_img} alt="최예나" />
                            <div>
                                <h4>최예나</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile yen_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/YenaMem' className='tri_m_mem_a'>
                            <img src='' alt="최예나" />
                            <h4>최예나</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <h2 className='tri_m_h2 yena_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full yena_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/YenaEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={Yena_m_img} alt="yena event" />
                            <div>
                                <h4>
                                    yena<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 yena_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full yena_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/YenaBloomingWingsAlbum' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={YenaBloomingWingsAlbum_img} alt="YenaBloomingWingsAlbum" />
                            <div>
                                <h4>
                                    Blooming<br />
                                    Wings
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 yena_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full yena_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/_yenacore" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={YenaInstagram_icon_img} alt="최예나 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@YENA_OFFICIAL" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={YenaYoutube_icon_img} alt="최예나 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ YH엔터테인먼트' />
        </div>
    );
};
