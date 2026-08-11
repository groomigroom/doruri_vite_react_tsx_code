import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/main/TriplesMain.css'
import './ARTMSMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Artms_m_logo from './img/ARTMS_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Artms_m_img from './img/Art_m_img.jpg';

import Artms_Heejin_m_img from './img/Art_mm_Heejin_img.jpg';
import Artms_Haseul_m_img from './img/Art_mm_Haseul_img.jpg';
import Artms_Kimlip_m_img from './img/Art_mm_Kimlip_img.jpg';
import Artms_Jinsoul_m_img from './img/Art_mm_Jinsoul_img.jpg';
import Artms_Choerry_m_img from './img/Art_mm_Choerry_img.jpg';

import ArtmsInstagram_icon_img from '../../triples/main/img/triples_instagram_icon.png';
import ArtmsYoutube_icon_img from '../../triples/main/img/triples_youtube_icon.png';


//191919

export default function ARTMSMain() {
    DoruriDocumentTitle('ARTMS');

    return (
        <div className='art_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/ARTMSMain' className="on">한국어</Link>
                <Link to='/ARTMSMainEng'>English</Link>
            </section>
            <img src={Artms_m_logo} alt="ARTMS 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ARTMS 꾸미기" />ARTMS<img src={MainH2Deco} alt="ARTMS 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;ARTMS&apos;와 함께<br />
                다시 한번 더<br />
                Fly Away!
            </p>
            <img src={Artms_m_img} className='tri_m_img' alt="ARTMS" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full art_m_mem_tr_full'>
                <section className='art_m_mem_tr3'>
                    <Link to='/ArtMemHeejin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Artms_Heejin_m_img} alt="희진 이미지" />
                            <div>
                                <h4>희진</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemHaseul' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Artms_Haseul_m_img} alt="하슬 이미지" />
                            <div>
                                <h4>하슬</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemKimlip' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Artms_Kimlip_m_img} alt="김립 이미지" />
                            <div>
                                <h4>김립</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='art_m_mem_tr2'>
                    <Link to='/ArtMemJinsoul' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Artms_Jinsoul_m_img} alt="진솔 이미지" />
                            <div>
                                <h4>진솔</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemChoerry' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Artms_Choerry_m_img} alt="최리 이미지" />
                            <div>
                                <h4>최리</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile art_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/ArtMemHeejin' className='tri_m_mem_a'>
                            <img src='' alt="희진 이미지" />
                            <h4>희진</h4>
                        </Link>
                        <Link to='/ArtMemHaseul' className='tri_m_mem_a'>
                            <img src='' alt="하슬 이미지" />
                            <h4>하슬</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/ArtMemKimlip' className='tri_m_mem_a'>
                            <img src='' alt="김립 이미지" />
                            <h4>김립</h4>
                        </Link>
                        <Link to='/ArtMemJinsoul' className='tri_m_mem_a'>
                            <img src='' alt="진솔 이미지" />
                            <h4>진솔</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/ArtMemChoerry' className='tri_m_mem_a'>
                            <img src='' alt="최리 이미지" />
                            <h4>최리</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <h2 className='tri_m_h2 artms_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full artms_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/ArtmsEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={Artms_m_img} alt="artms event" />
                            <div>
                                <h4>
                                    Artms<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 artms_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full artms_m_album_tr_full'>
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

            <h2 className='tri_m_h2 artms_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full artms_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/official_artms" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={ArtmsInstagram_icon_img} alt="DAY6 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@official_artms" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={ArtmsYoutube_icon_img} alt="DAY6 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <Link to='/ARTMSMain_7_23End' className='tri_mm_s1_before_links'>이전 페이지 보기</Link>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};
