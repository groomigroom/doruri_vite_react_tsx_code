import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../txt/main/TxtMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import Txt_m_logo from '../../txt/main/img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import txt_m_img from './img/txt_m_txtimg.jpg';

// import Txt_m_memSubin from './img/txt_m_mem_subin.jpg';
// import Txt_m_memYeonjun from './img/txt_m_mem_yeonjun.jpg';
// import Txt_m_memBeomgyu from './img/txt_m_mem_beomgyu.jpg';
// import Txt_m_memTaehyun from './img/txt_m_mem_taehyun.jpg';
// import Txt_m_memHueningkai from './img/txt_m_mem_hueningkai.jpg';

export default function TxtMainEng() {
    return (
        <div className='txt_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/TxtMain'>한국어</Link>
                <Link to='/TxtMainEng' className="on">English</Link>
            </section>
            <img src={Txt_m_logo} alt="txt logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="투바투 로고 꾸미기" />TOMORROW X TOGETHER<img src={MainH2Deco} alt="투바투 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                one! dream!<br />
                Just one more day Let's cheer up with<br />
                &apos;TOMORROW X TOGETHER&apos;.</p>
            <img src="" className='tri_m_img txt_m_img' alt='TOMORROW X TOGETHER' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full txt_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TxtMemSubinEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Soobin 이미지" />
                            <h4>Soobin</h4>
                        </article>
                    </Link>
                    <Link to='/TxtMemYeonjunEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Yeonjun 이미지" />
                            <h4>Yeonjun</h4>
                        </article>
                    </Link>
                    <Link to='/TxtMemBeomgyuEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Beomgyu 이미지" />
                            <h4>Beomgyu</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr txt_m_mem_tr'>
                    <Link to='/TxtMemTaehyunEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Taehyun 이미지" />
                            <h4>Taehyun</h4>
                        </article>
                    </Link>
                    <Link to='/TxtMemHueningkaiEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="Huening Kai 이미지" />
                            <h4>Huening Kai</h4>
                        </article>
                    </Link>

                </section>


            </section>




            <Link to="/TxtEvent">이벤트</Link>
        </div>
    );
};

