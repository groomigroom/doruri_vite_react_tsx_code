import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './IllitMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Ill_m_logo from './img/Ill_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Ill_m_img from './img/illit_m_illit.jpg';

import Ill_m_MemYunah_img from './img/illit_m_mem_Yunah.jpg';
import Ill_m_MemMinju_img from './img/illit_m_mem_Minju.jpg';
import Ill_m_MemMoka_img from './img/illit_m_mem_Moka.jpg';
import Ill_m_MemWonhee_img from './img/illit_m_mem_Wonhee.jpg';
import Ill_m_MemEroha_img from './img/illit_m_mem_Iroha.jpg';

//191919
//FFFFFF

export default function IllitMain() {
    return (
        <div className='ill_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/IllitMain' className="on">한국어</Link>
                <Link to='/IllitMainEng'>English</Link>
            </section>
            <img src={Ill_m_logo} alt="illit 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="illit 로고 꾸미기" />ILLIT<img src={MainH2Deco} alt="illit 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;ILLIT&apos;과 함께<br />
                Who's your bias?<br />
                I'm your bias!
            </p>
            <img src={Ill_m_img} className='tri_m_img' alt='illit' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full ill_m_mem_tr_full'>
                <section className='ill_m_mem_tr3'>
                    <Link to='/IllMemYunah' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ill_m_MemYunah_img} alt="윤아 이미지" className='ill_m_mem_img' />
                            <div>
                                <h4>윤아</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/IllMemMinju' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ill_m_MemMinju_img} alt="민주 이미지" />
                            <div>
                                <h4>민주</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/IllMemMoka' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ill_m_MemMoka_img} alt="모카 이미지" />
                            <div>
                                <h4>모카</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='ill_m_mem_tr2'>
                    <Link to='/IllMemWonhee' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ill_m_MemWonhee_img} alt="원희 이미지" />
                            <div>
                                <h4>원희</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/IllMemEroha' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Ill_m_MemEroha_img} alt="이로하 이미지" />
                            <div>
                                <h4>이로하</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile ill_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/IllMemYunah' className='tri_m_mem_a'>
                            <img src={Ill_m_MemYunah_img} alt="윤아 이미지" className='ill_m_mem_img' />
                            <h4>윤아</h4>
                        </Link>
                        <Link to='/IllMemMinju' className='tri_m_mem_a'>
                            <img src={Ill_m_MemMinju_img} alt="민주 이미지" />
                            <h4>민주</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/IllMemMoka' className='tri_m_mem_a'>
                            <img src={Ill_m_MemMoka_img} alt="모카 이미지" />
                            <h4>모카</h4>
                        </Link>
                        <Link to='/IllMemWonhee' className='tri_m_mem_a'>
                            <img src={Ill_m_MemWonhee_img} alt="원희 이미지" />
                            <h4>원희</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/IllMemEroha' className='tri_m_mem_a'>
                            <img src={Ill_m_MemEroha_img} alt="이로하 이미지" />
                            <h4>이로하</h4>
                        </Link>
                    </section>
                </section>

            </section>
            <FooterPart FooterPartText='ⓒ 빌리프랩' />
        </div>
    );
};

