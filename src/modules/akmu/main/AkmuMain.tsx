import { Link } from 'react-router-dom';
import { DoruriDocumentTitle } from '../../DoruriDocumentTitle';

import "../../triples/main/TriplesMain.css";
import "./AkmuMain.css";

import Akmu_m_logo from './img/akmu_m_logo.svg';
import Akmu_m_img from './img/aknu_m_akmuimg.jpg';

import Akmu_m_chanhyuk from './img/aknu_m_chanhyuk.jpg';
import Akmu_m_suhyun from './img/aknu_m_suhyun.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import AkmuGaehwaAlbum_img from '../albums/img/AkmuGaehwaAlbum_img.jpg';

import AkmuInstagram_img from './img/AkmuInstagram_icon_img.png';
import AkmuYoutube_img from './img/AkmuYoutube_icon_img.png';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

//#13983f

export default function AkmuMain() {
    DoruriDocumentTitle('AKMU');

    return (
        <div className='akmu_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/AkmuMain' className="on">한국어</Link>
                <Link to='/AkmuMainEng'>English</Link>
            </section>
            <img src={Akmu_m_logo} alt="AKMU 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'>
                <img src={MainH2Deco} alt="AKMU 로고 꾸미기" />AKMU<img src={MainH2Deco} alt="AKMU 로고 꾸미기" />
            </h2>
            <p className='tri_m_intropp'>
                지치고 병들지 말고<br />
                &apos;AKMU&apos;와 함께<br />
                오늘도 힘내길 바래요!
            </p>
            <img src={Akmu_m_img} className='tri_m_img akmu_m_img' alt='akmu' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full akmu_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/AkmuMemChanhyuk' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_chanhyuk} alt="이찬혁 이미지" />
                            <div>
                                <h4>이찬혁</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AkmuMemSuhyun'>
                        <article className='tri_m_mem'>
                            <img src={Akmu_m_suhyun} alt="이수현 이미지" />
                            <div>
                                <h4>이수현</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile akmu_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/AkmuMemChanhyuk' className='tri_m_mem_a'>
                            <img src={Akmu_m_chanhyuk} alt="이찬혁 이미지" />
                            <h4>이찬혁</h4>
                        </Link>
                        <Link to='/AkmuMemSuhyun'>
                            <img src={Akmu_m_suhyun} alt="이수현 이미지" />
                            <h4>이수현</h4>
                        </Link>
                    </section>
                </section>
            </section>

            <h2 className='tri_m_h2 akmu_m_h2_4'>▪ 이벤트 ▪</h2>
            <section className='tri_m_event_tr_full akmu_m_event_tr_full'>
                <section className='tri_m_event_tr'>
                    <Link to='/AkmuEvent' className='tri_m_event_a'>
                        <article className='tri_m_events'>
                            <img src={Akmu_m_img} alt="akmu event" />
                            <div>
                                <h4>개화<br />
                                    이벤트</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 akmu_m_h2_5'>▪ 최신 앨범 ▪</h2>
            <section className='tri_m_album_tr_full akmu_m_album_tr_full'>
                <section className='tri_m_album_tr'>
                    <Link to='/AkmuGaehwaAlbum' className='tri_m_album_a'>
                        <article className='tri_m_albums'>
                            <img src={AkmuGaehwaAlbum_img} alt="개화" />
                            <div>
                                <h4>
                                    개화
                                </h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>

            <h2 className='tri_m_h2 akmu_m_h2_6'>▪ sns ▪</h2>
            <section className='tri_m_sns_tr_full akmu_m_sns_tr_realfull'>
                <section className='tri_m_album_tr'>
                    <a href="https://www.instagram.com/akmuofficial/" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a akmu_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={AkmuInstagram_img} alt="악뮤 인스타그램" />
                            <div>
                                <h4>
                                    인스타그램
                                </h4>
                            </div>
                        </article>
                    </a>
                    <a href="https://www.youtube.com/@AKMU" target='_blank' rel='noopener noreferrer' className='tri_m_sns_a akmu_m_sns_a'>
                        <article className='tri_m_snss'>
                            <img src={AkmuYoutube_img} alt="악뮤 유튜브" />
                            <div>
                                <h4>
                                    유튜브
                                </h4>
                            </div>
                        </article>
                    </a>
                </section>
            </section>

            <FooterPart FooterPartText='ⓒ 영감의 샘터' />
        </div>
    );
};
