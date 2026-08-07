import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './HanroroMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Han_m_logo from './img/Hanroro_m_logo_191919.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Hanroro_m_img from './img/Hanroro_m_img.jpg';

import HanroroInstagram_icon_img from '../../triples/main/img/triples_instagram_icon.png';
import HanroroYoutube_icon_img from '../../triples/main/img/triples_youtube_icon.png';

//191919

export default function HanroroMain() {
    return (
        <div className='han_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/HanroroMain' className="on">한국어</Link>
                <Link to='/HanroroMainEng'>English</Link>
            </section>
            <img src={Han_m_logo} alt="한로로 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="한로로 꾸미기" />한로로<img src={MainH2Deco} alt="한로로 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;한로로&apos;와 함께<br />
                돌고도는 세계에서<br />
                좋은 생각을 해보아요!
            </p>
            <img src={Hanroro_m_img} className='tri_m_img ten_m_img' alt='한로로' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 소개 ▪</h2>
            <section className='tri_m_mem_tr_full han_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/HanMemHanroro' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Hanroro_m_img} alt="한로로 이미지" />
                            <div>
                                <h4>한로로</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile han_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/HanMemHanroro' className='tri_m_mem_a'>
                            <img src='' alt="한로로 이미지" />
                            <h4>한로로</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <h2 className='tri_m_h2 hanroro_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full hanroro_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/HanroroEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={Hanroro_m_img} alt="hanroro event" />
                            <div>
                                <h4>
                                    Jpop<br />
                                    Remake<br />
                                    이벤트
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 hanroro_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full hanroro_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/HanroroJpopRemakeVol2Album' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src='' alt="HanroroJpopRemakeVol2Album" />
                            <div>
                                <h4>
                                    Jpop<br />
                                    Remake<br />
                                    Vol2
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 hanroro_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full hanroro_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/fromhanroro" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={HanroroInstagram_icon_img} alt="한로로 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/channel/UCrDa_5OU-rhvXqWlPx5hgKQ" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={HanroroYoutube_icon_img} alt="한로로 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ authentic' />
        </div>
    );
};
