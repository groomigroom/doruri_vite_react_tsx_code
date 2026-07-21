import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './AespaMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

import Aes_m_logo from './img/Aes_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Aes_m_img from './img/aespa_m_aespa.jpg';

import Aes_m_MemKarina_img from './img/aespa_m_mem_Karina.jpg';
import Aes_m_MemJijell_img from './img/aespa_m_mem_Jijel.jpg';
import Aes_m_MemWinter_img from './img/aespa_m_mem_Winter.jpg';
import Aes_m_MemNingning_img from './img/aespa_m_mem_Ningning.jpg';

//191919
//ffffff

export default function AespaMain() {
    return (
        <div className='aes_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/AespaMain' className="on">한국어</Link>
                <Link to='/AespaMainEng'>English</Link>
            </section>
            <img src={Aes_m_logo} alt="aespa 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="aespa 로고 꾸미기" />aespa<img src={MainH2Deco} alt="aespa 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;aespa&apos;와 함께<br />
                다른 세계에서<br />
                Lemonade를 만들어 봐요!
            </p>
            <img src={Aes_m_img} className='tri_m_img' alt='aespa' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full aes_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/AesMemKarina' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Aes_m_MemKarina_img} alt="카리나 이미지" />
                            <div>
                                <h4>카리나</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AesMemJijell' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Aes_m_MemJijell_img} alt="지젤 이미지" />
                            <div>
                                <h4>지젤</h4>
                            </div>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/AesMemWinter' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Aes_m_MemWinter_img} alt="윈터 이미지" />
                            <div>
                                <h4>윈터</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AesMemNingning' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Aes_m_MemNingning_img} alt="닝닝 이미지" />
                            <div>
                                <h4>닝닝</h4>
                            </div>
                        </article>
                    </Link>


                </section>
            </section>

            {/* 모바일 멤버 보기 */}
            <section className="tri_m_mem_tr_full_mobile aes_m_mem_tr_full_mobile">
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/AesMemKarina' className='tri_m_mem_a'>
                            <img src={Aes_m_MemKarina_img} alt="카리나 이미지" />
                            <h4>카리나</h4>
                        </Link>
                        <Link to='/AesMemJijell' className='tri_m_mem_a'>
                            <img src={Aes_m_MemJijell_img} alt="지젤 이미지" />
                            <h4>지젤</h4>
                        </Link>
                    </section>
                </section>
                <section className="tri_m_mem_trtr">
                    <section className='tri_m_mem_tr'>
                        <Link to='/AesMemWinter' className='tri_m_mem_a'>
                            <img src={Aes_m_MemWinter_img} alt="윈터 이미지" />
                            <h4>윈터</h4>
                        </Link>
                        <Link to='/AesMemNingning' className='tri_m_mem_a'>
                            <img src={Aes_m_MemNingning_img} alt="닝닝 이미지" />
                            <h4>닝닝</h4>
                        </Link>
                    </section>
                </section>

            </section>

            <FooterPart />
        </div>
    );
};
