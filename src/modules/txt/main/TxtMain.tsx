import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import '../../triples/main/TriplesMain.css'
import './TxtMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import txt_m_img from './img/txt_m_txtimg.jpg';

import Txt_m_memSubin from './img/txt_m_mem_subin.jpg';
import Txt_m_memYeonjun from './img/txt_m_mem_yeonjun.jpg';
import Txt_m_memBeomgyu from './img/txt_m_mem_beomgyu.jpg';
import Txt_m_memTaehyun from './img/txt_m_mem_taehyun.jpg';
import Txt_m_memHueningkai from './img/txt_m_mem_hueningkai.jpg';

import Txt7thYearAlbum_img from '../albums/img/Txt7thYearAlbum_img.jpg';

import TxtInstagram_icon_img from './img/TxtInstagram_icon_img.png';
import TxtYoutube_icon_img from './img/TxtYoutube_icon_img.png';

//#FF1E91

export default function TxtMain() {
    DoruriDocumentTitle('투모로우바이투게더');

    return (
        <div className='txt_m_full'>
            <header className='tri_m_header'>
                <Menu />
                <section className="home_translate">
                    <Link to='/TxtMain' className="on">한국어</Link>
                    <Link to='/TxtMainEng'>English</Link>
                </section>
            </header>
            <section className='tri_m_logo_section'>
                <img src={Txt_m_logo} alt="투바투 로고" />
            </section>
            <section className='tri_m_h2'>
                <h2><img src={MainH2Deco} alt="투바투 로고 꾸미기" />투모로우바이투게더<img src={MainH2Deco} alt="투바투 로고 꾸미기" /></h2>
            </section>
            <section className='tri_m_intropp'>
                <p>
                    one! dream!<br />
                    하루에 하루만 더<br />
                    &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.
                </p>
            </section>
            <section className='tri_m_img'>
                <img src={txt_m_img} alt='투모로우바이투게더' />
                {/* border color 넣기 */}
            </section>
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full txt_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TxtMemSubin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Txt_m_memSubin} alt="수빈 이미지" />
                            <div>
                                <h4>수빈</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TxtMemYeonjun' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Txt_m_memYeonjun} alt="연준 이미지" />
                            <div>
                                <h4>연준</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TxtMemBeomgyu' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Txt_m_memBeomgyu} alt="범규 이미지" />
                            <div>
                                <h4>범규</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr txt_m_mem_tr'>
                    <Link to='/TxtMemTaehyun' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Txt_m_memTaehyun} alt="태현 이미지" />
                            <div>
                                <h4>태현</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/TxtMemHueningkai' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Txt_m_memHueningkai} alt="휴닝카이 이미지" />
                            <div>
                                <h4>휴닝카이</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile txt_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TxtMemSubin' className='tri_m_mem_a'>
                            <img src={Txt_m_memSubin} alt="수빈 이미지" />
                            <h4>수빈</h4>
                        </Link>
                        <Link to='/TxtMemYeonjun' className='tri_m_mem_a'>
                            <img src={Txt_m_memYeonjun} alt="연준 이미지" />
                            <h4>연준</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/TxtMemBeomgyu' className='tri_m_mem_a'>
                            <img src={Txt_m_memBeomgyu} alt="범규 이미지" />
                            <h4>범규</h4>
                        </Link>
                        <Link to='/TxtMemTaehyun' className='tri_m_mem_a'>
                            <img src={Txt_m_memTaehyun} alt="태현 이미지" />
                            <h4>태현</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/TxtMemHueningkai' className='tri_m_mem_a'>
                            <img src={Txt_m_memHueningkai} alt="휴닝카이 이미지" />
                            <h4>휴닝카이</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <h2 className='tri_m_h2 txt_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full txt_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/TxtEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={txt_m_img} alt="txt event" />
                            <div>
                                <h4>7TH<br />
                                    YEAR<br />
                                    이벤트</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 txt_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full txt_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/Txt7thYearAlbum' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={Txt7thYearAlbum_img} alt="7TH YEAR: 가시덤불에 잠시 바람이 멈췄을 때" />
                            <div>
                                <h4>
                                    7TH<br />
                                    YEAR<br />
                                    ...<br />
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 txt_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full txt_m_sns_tr_full'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/txt_bighit" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a txt_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={TxtInstagram_icon_img} alt="투모로우바이투게더 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/TXT_bighit" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a txt_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={TxtYoutube_icon_img} alt="투모로우바이투게더 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ 빅히트 뮤직' />
        </div>
    );
};
