import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './ResMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Res_m_logo from './img/Res_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Res_m_img from './img/rescene_m_rescene.jpg';

import Res_m_MemWoni_img from './img/rescene_m_mem_Woni.jpg';
import Res_m_MemLiv_img from './img/rescene_m_mem_Liv.jpg';
import Res_m_MemMinami_img from './img/rescene_m_mem_Minami.jpg';
import Res_m_MemMay_img from './img/rescene_m_mem_May.jpg';
import Res_m_MemJena_img from './img/rescene_m_mem_Jena.jpg';

//191919
//ffffff

export default function ResMain() {
    return (
        <div className='res_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/ResMain' className="on">한국어</Link>
                <Link to='/ResMainEng'>English</Link>
            </section>
            <img src={Res_m_logo} alt="RESCENE 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="RESCENE 꾸미기" />RESCENE<img src={MainH2Deco} alt="RESCENE 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;RESCENE&apos;와 함께<br />
                좋은 곳으로<br />
                Runaway!
            </p>
            <img src={Res_m_img} className='tri_m_img' alt="rescene" />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full res_m_mem_tr_full'>
                <section className='res_m_mem_tr3'>
                    <Link to='/ResMemWoni' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Res_m_MemWoni_img} alt="원이 이미지" />
                            <div>
                                <h4>원이</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ResMemLiv' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Res_m_MemLiv_img} alt="리브 이미지" />
                            <div>
                                <h4>리브</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ResMemMinami' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Res_m_MemMinami_img} alt="미나미 이미지" />
                            <div>
                                <h4>미나미</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='res_m_mem_tr2'>
                    <Link to='/ResMemMay' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Res_m_MemMay_img} alt="메이 이미지" />
                            <div>
                                <h4>메이</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/ResMemJena' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Res_m_MemJena_img} alt="제나 이미지" />
                            <div>
                                <h4>제나</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile res_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/ResMemWoni' className='tri_m_mem_a'>
                            <img src={Res_m_MemWoni_img} alt="원이 이미지" />
                            <h4>원이</h4>
                        </Link>
                        <Link to='/ResMemLiv' className='tri_m_mem_a'>
                            <img src={Res_m_MemLiv_img} alt="리브 이미지" />
                            <h4>리브</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/ResMemMinami' className='tri_m_mem_a'>
                            <img src={Res_m_MemMinami_img} alt="미나미 이미지" />
                            <h4>미나미</h4>
                        </Link>
                        <Link to='/ResMemMay' className='tri_m_mem_a'>
                            <img src={Res_m_MemMay_img} alt="메이 이미지" />
                            <h4>메이</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr1'>
                        <Link to='/ResMemJena' className='tri_m_mem_a'>
                            <img src={Res_m_MemJena_img} alt="제나 이미지" />
                            <h4>제나</h4>
                        </Link>
                    </section>
                </section>

            </section >
            <FooterPart />
        </div >
    );
};

