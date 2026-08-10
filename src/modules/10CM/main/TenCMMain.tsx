import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/main/TriplesMain.css'
import './TenCMMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Ten_m_logo from './img/TenCM_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Ten_m_img from './img/10cm_m_mem_Gwonjungyeol.jpg';

import TenCMTheDarkestNightAlbum_img from '../albums/img/TenCMTheDarkestNightAlbum_img.jpg';

import TenCM_instagram_img from './img/TenCM_instagram_icon_img.png';
import TenCM_youtube_img from './img/TenCM_youtube_icon_img.png';

//000000

export default function TenCMMain() {
    DoruriDocumentTitle('10CM');

    return (
        <div className='ten_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TenCMMain' className="on">한국어</Link>
                <Link to='/TenCMMainEng'>English</Link>
            </section>
            <img src={Ten_m_logo} alt="10CM 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="10CM 꾸미기" />10CM<img src={MainH2Deco} alt="10CM 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;10CM&apos;와 함께<br />
                불안한 마음이 있더라도<br />
                힘내 보아요!
            </p>
            <img src={Ten_m_img} className='tri_m_img ten_m_img' alt='10CM' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full ten_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TenMemGwonjungyeol' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ten_m_img} alt="권정열 이미지" />
                            <div>
                                <h4>권정열</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile ten_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/TenMemGwonjungyeol' className='tri_m_mem_a'>
                            <img src={Ten_m_img} alt="권정열 이미지" />
                            <h4>권정열</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <h2 className='tri_m_h2 ten_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full ten_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/ResceneEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={Ten_m_img} alt="10cm event" />
                            <div>
                                <h4>
                                    Darkest<br />
                                    Night<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 ten_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full ten_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/TenCMTheDarkestNightAlbum' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={TenCMTheDarkestNightAlbum_img} alt="TenCMTheDarkestNightAlbum" />
                            <div>
                                <h4>
                                    The<br />
                                    Darkest<br />
                                    Night
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 ten_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full ten_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/10cm_official_kr" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={TenCM_instagram_img} alt="10CM 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@10cmofficial_channel" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={TenCM_youtube_img} alt="10CM 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <Link to='/TenCMMain_7_23End' className='tri_mm_s1_before_links'>이전 페이지 보기</Link>
            <FooterPart FooterPartText='ⓒ 씨에이엠위더스' />
        </div>
    );
};
