import { Link } from 'react-router-dom';

import '../../../triples/main/TriplesMain.css'
import '../ARTMSMain.css';

import Menu from '../../../Menu';
import FooterPart from '../../../FooterPart';

import Art_m_logo from '../img/ARTMS_m_logo.svg';
import MainH2Deco from '../../../img/main_h2_deco.png';
import Art_m_img from '../img/Art_m_img.jpg';

import Art_m_MemHeejin_img from '../img/Art_mm_Heejin_img.jpg';
import Art_m_MemHaseul_img from '../img/Art_mm_Haseul_img.jpg';
import Art_m_MemKimlip_img from '../img/Art_mm_Kimlip_img.jpg';
import Art_m_MemJinsoul_img from '../img/Art_mm_Jinsoul_img.jpg';
import Art_m_MemChoerry_img from '../img/Art_mm_Choerry_img.jpg';

//191919

export default function ARTMSMain_7_23End() {
    return (
        <div className='art_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/ARTMSMain' className="on">한국어</Link>
                <Link to='/ARTMSMainEng'>English</Link>
            </section>
            <img src={Art_m_logo} alt="ARTMS 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ARTMS 꾸미기" />ARTMS<img src={MainH2Deco} alt="ARTMS 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;ARTMS&apos;와 함께<br />
                다시 한번 더<br />
                Fly Away!
            </p>
            <img src={Art_m_img} className='tri_m_img' alt="ARTMS" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full art_m_mem_tr_full'>
                <section className='art_m_mem_tr3'>
                    <Link to='/ArtMemHeejin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Art_m_MemHeejin_img} alt="희진 이미지" />
                            <div>
                                <h4>희진</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemHaseul' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Art_m_MemHaseul_img} alt="하슬 이미지" />
                            <div>
                                <h4>하슬</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemKimlip' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Art_m_MemKimlip_img} alt="김립 이미지" />
                            <div>
                                <h4>김립</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='art_m_mem_tr2'>
                    <Link to='/ArtMemJinsoul' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Art_m_MemJinsoul_img} alt="진솔 이미지" />
                            <div>
                                <h4>진솔</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ArtMemChoerry' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Art_m_MemChoerry_img} alt="최리 이미지" />
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
                            <img src={Art_m_MemHeejin_img} alt="희진 이미지" />
                            <h4>희진</h4>
                        </Link>
                        <Link to='/ArtMemHaseul' className='tri_m_mem_a'>
                            <img src={Art_m_MemHaseul_img} alt="하슬 이미지" />
                            <h4>하슬</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/ArtMemKimlip' className='tri_m_mem_a'>
                            <img src={Art_m_MemKimlip_img} alt="김립 이미지" />
                            <h4>김립</h4>
                        </Link>
                        <Link to='/ArtMemJinsoul' className='tri_m_mem_a'>
                            <img src={Art_m_MemJinsoul_img} alt="진솔 이미지" />
                            <h4>진솔</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/ArtMemChoerry' className='tri_m_mem_a'>
                            <img src={Art_m_MemChoerry_img} alt="최리 이미지" />
                            <h4>최리</h4>
                        </Link>
                    </section>
                </section>

            </section>
            <h2>최신 앨범</h2>
            <p>Club Icarus</p>
            <FooterPart FooterPartText='ⓒ ㈜모드하우스' />
        </div>
    );
};





