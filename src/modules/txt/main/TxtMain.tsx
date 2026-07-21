import { Link } from 'react-router-dom';

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

export default function TxtMain() {
    return (
        <div className='txt_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/TxtMain' className="on">한국어</Link>
                <Link to='/TxtMainEng'>English</Link>
            </section>
            <img src={Txt_m_logo} alt="투바투 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="투바투 로고 꾸미기" />투모로우바이투게더<img src={MainH2Deco} alt="투바투 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                one! dream!<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src={txt_m_img} className='tri_m_img txt_m_img' alt='투모로우바이투게더' />
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

            <Link to="/TxtEvent">이벤트</Link>
            <FooterPart />
        </div>
    );
};
