import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './BTSMain.css';

import Menu from '../../Menu';

//import Str_m_logo from './img/Str_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
//import Str_m_img from './img/stray_m_stray_kids.jpg';

//import Str_m_MemBangchan_img from './img/stray_m_mem_Bangchan.jpg';
//import Str_m_MemLino_img from './img/stray_m_mem_Lino.jpg';
//import Str_m_MemChangbin_img from './img/stray_m_mem_Changbin.jpg';
//import Str_m_MemHyunjin_img from './img/stray_m_mem_Hyunjin.jpg';
//import Str_m_MemHan_img from './img/stray_m_mem_Han.jpg';
//import Str_m_MemFilix_img from './img/stray_m_mem_Filix.jpg';
//import Str_m_MemSeungmin_img from './img/stray_m_mem_Seungmin.jpg';
//import Str_m_MemIn_img from './img/stray_m_mem_In.jpg';

//#????


export default function BTSMain() {
    return (
        <div className='bts_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/BTSMain' className="on">한국어</Link>
                <Link to='/BTSMainEng'>English</Link>
            </section>
            <img src='' alt="방탄소년단 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="방탄소년단 꾸미기" />방탄소년단<img src={MainH2Deco} alt="방탄소년단 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####
                &apos;Stray Kids&apos;와 함께<br />
                시련 속에서도 계속<br />
                running out!</p>
            <img src={Str_m_img} className='tri_m_img' alt='방탄소년단' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full str_m_mem_tr_full'>

                <section className='tri_m_mem_tr str_m_mem_tr'>
                    <Link to='/StrayMemBangchan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="RM 이미지" />
                            <div>
                                <h4>RM</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/StrayMemLino'>
                        <article className='tri_m_mem'>
                            <img src='' alt="리노 이미지" />
                            <div>
                                <h4>리노</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemChangbin'>
                        <article className='tri_m_mem'>
                            <img src='' alt="창빈 이미지" />
                            <div>
                                <h4>창빈</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemHyunjin'>
                        <article className='tri_m_mem'>
                            <img src='' alt="현진 이미지" />
                            <div>
                                <h4>현진</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/StrayMemHan'>
                        <article className='tri_m_mem'>
                            <img src='' alt="한 이미지" />
                            <div>
                                <h4>한</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemFilix'>
                        <article className='tri_m_mem'>
                            <img src='' alt="필릭스 이미지" />
                            <div>
                                <h4>필릭스</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemSeungmin'>
                        <article className='tri_m_mem'>
                            <img src='' alt="승민 이미지" />
                            <div>
                                <h4>승민</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>
        </div>
    );
};


