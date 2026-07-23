import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css';
import './IoiMain.css';

import Ioi_m_logo from './img/Ioi_m_logo.png';
import Ioi_m_img from './img/ioi_m_ioi.jpg';

import Ioi_m_MemImnayoung_img from './img/ioi_m_mem_Imnayoung.jpg';
import Ioi_m_MemKimchungha_img from './img/ioi_m_mem_Kimchungha.jpg';
import Ioi_m_MemKimsejung_img from './img/ioi_m_mem_Kimsejung.jpg';
import Ioi_m_MemJungcheyun_img from './img/ioi_m_mem_Jungchaeyun.jpg';
import Ioi_m_MemJugyulgyoung_img from './img/ioi_m_mem_Jugyulgyung.jpg';
import Ioi_m_MemKimsohye_img from './img/ioi_m_mem_Kimsohye.jpg';
import Ioi_m_MemYuyeonjung_img from './img/ioi_m_mem_Yuyunjung.jpg';
import Ioi_m_MemChoiyujung_img from './img/ioi_m_mem_Choiyujung.jpg';
import Ioi_m_MemGangmina_img from './img/ioi_m_mem_Gangmina.jpg';
import Ioi_m_MemKimdoyeon_img from './img/ioi_m_mem_Kimdoyeon.jpg';
import Ioi_m_MemJeonsomi_img from './img/ioi_m_mem_Jeonsomi.jpg';

import MainH2Deco from '../../img/main_h2_deco.png';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

//#F4CE9D


export default function IoiMain() {
    return (
        <div className='ioi_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/IoiMain' className="on">한국어</Link>
                <Link to='/IoiMainEng'>English</Link>
            </section>
            <img src={Ioi_m_logo} alt="아이오아이 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="아이오아이 로고 꾸미기" />아이오아이<img src={MainH2Deco} alt="아이오아이 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>갑자기 찾아온<br />
                &apos;아이오아이&apos;와 함께<br />
                오늘도 좋은 생각에 잠겨 보아요!
            </p>
            <img src={Ioi_m_img} className='tri_m_img ioi_m_img' alt='아이오아이 이미지' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='ioi_m_mem_tr_full'>

                <section className='ioi_m_mem_tr4'>
                    <Link to='/IoiMemImnayoung' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemImnayoung_img} alt="임나영 이미지" />
                            <div>
                                <h4>임나영</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/IoiMemKimchungha'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemKimchungha_img} alt="김청하 이미지" />
                            <div>
                                <h4>김청하</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IoiMemKimsejung'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemKimsejung_img} alt="김세정 이미지" />
                            <div>
                                <h4>김세정</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IoiMemJungcheyun'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemJungcheyun_img} alt="정채연 이미지" />
                            <div>
                                <h4>정채연</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='ioi_m_mem_tr4'>
                    <Link to='/IoiMemJugyulgyoung'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemJugyulgyoung_img} alt="주결경 이미지" />
                            <div>
                                <h4>주결경</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IoiMemKimsohye'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemKimsohye_img} alt="김소혜 이미지" />
                            <div>
                                <h4>김소혜</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IoiMemYuyeonjung'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemYuyeonjung_img} alt="유연정 이미지" />
                            <div>
                                <h4>유연정</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IoiMemChoiyujung'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemChoiyujung_img} alt="최유정 이미지" />
                            <div>
                                <h4>최유정</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='ioi_m_mem_tr3'>
                    <Link to='/IoiMemGangmina'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemGangmina_img} alt="강미나 이미지" />
                            <div>
                                <h4>강미나</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IoiMemKimdoyeon'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemKimdoyeon_img} alt="김도연 이미지" />
                            <div>
                                <h4>김도연</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/IoiMemJeonsomi'>
                        <article className='tri_m_mem'>
                            <img src={Ioi_m_MemJeonsomi_img} alt="전소미 이미지" />
                            <div>
                                <h4>전소미</h4>
                            </div>
                        </article>
                    </Link>

                </section>

            </section>
            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile ioi_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/IoiMemImnayoung' className='tri_m_mem_a'>
                            <img src={Ioi_m_MemImnayoung_img} alt="임나영 이미지" />
                            <h4>임나영</h4>
                        </Link>
                        <Link to='/IoiMemKimchungha'>
                            <img src={Ioi_m_MemKimchungha_img} alt="김청하 이미지" />
                            <h4>김청하</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/IoiMemKimsejung'>
                            <img src={Ioi_m_MemKimsejung_img} alt="김세정 이미지" />
                            <h4>김세정</h4>
                        </Link>

                        <Link to='/IoiMemJungcheyun'>
                            <img src={Ioi_m_MemJungcheyun_img} alt="정채연 이미지" />
                            <h4>정채연</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/IoiMemJugyulgyoung'>
                            <img src={Ioi_m_MemJugyulgyoung_img} alt="주결경 이미지" />
                            <h4>주결경</h4>
                        </Link>

                        <Link to='/IoiMemKimsohye'>
                            <img src={Ioi_m_MemKimsohye_img} alt="김소혜 이미지" />
                            <h4>김소혜</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/IoiMemYuyeonjung'>
                            <img src={Ioi_m_MemYuyeonjung_img} alt="유연정 이미지" />
                            <h4>유연정</h4>
                        </Link>

                        <Link to='/IoiMemChoiyujung'>
                            <img src={Ioi_m_MemChoiyujung_img} alt="최유정 이미지" />
                            <h4>최유정</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/IoiMemGangmina'>
                            <img src={Ioi_m_MemGangmina_img} alt="강미나 이미지" />
                            <h4>강미나</h4>
                        </Link>

                        <Link to='/IoiMemKimdoyeon'>
                            <img src={Ioi_m_MemKimdoyeon_img} alt="김도연 이미지" />
                            <h4>김도연</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/IoiMemJeonsomi'>
                            <img src={Ioi_m_MemJeonsomi_img} alt="전소미 이미지" />
                            <h4>전소미</h4>
                        </Link>
                    </section>
                </section>

            </section>
            <FooterPart FooterPartText='ⓒ 스윙엔터테인먼트' />
        </div>
    );
};
