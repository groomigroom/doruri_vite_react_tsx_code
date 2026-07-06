import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './TwsMain.css';

import Menu from '../../Menu';

import Tws_m_logo from './img/Tws_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Tws_m_img from './img/tws_m_tws.jpg';

import Tws_m_MemSinyu_img from './img/tws_m_mem_Sinyu.jpg';
import Tws_m_MemDohun_img from './img/tws_m_mem_Dohun.jpg';
import Tws_m_MemYoungjae_img from './img/tws_m_mem_Youngjae.jpg';
import Tws_m_MemHanjin_img from './img/tws_m_mem_Hanjin.jpg';
import Tws_m_MemJihun_img from './img/tws_m_mem_Jihun.jpg';
import Tws_m_MemGyungmin_img from './img/tws_m_mem_Kyungmin.jpg';

//#191919
//#ffffff

export default function TwsMain() {
    return (
        <div className='tws_m_full'>
            <Menu />
            <img src={Tws_m_logo} alt="TWS 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="TWS 로고 꾸미기" />TWS<img src={MainH2Deco} alt="TWS 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                Twenty four seven<br />
                &apos;TWS&apos;와 함께<br />
                새로운 가능성을 찾아 봐요!</p>
            <img src={Tws_m_img} className='tri_m_img' alt='tws' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tws_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TwsMemSinyu' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemSinyu_img} alt="신유 이미지" />
                            <h4>신유</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemDohun' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemDohun_img} alt="도훈 이미지" />
                            <h4>도훈</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemYoungjae' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemYoungjae_img} alt="영재 이미지" />
                            <h4>영재</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/TwsMemHanjin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemHanjin_img} alt="한진 이미지" />
                            <h4>한진</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemJihun' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemJihun_img} alt="지훈 이미지" />
                            <h4>지훈</h4>
                        </article>
                    </Link>
                    <Link to='/TwsMemGyungmin' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Tws_m_MemGyungmin_img} alt="경민 이미지" />
                            <h4>경민</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};
