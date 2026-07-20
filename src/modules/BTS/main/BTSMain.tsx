import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './BTSMain.css';

import Menu from '../../Menu';
import FooterPart from '../../FooterPart';

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

//#191919


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
            <img src='' className='tri_m_img' alt='방탄소년단' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full str_m_mem_tr_full'>

                <section className='tri_m_mem_tr str_m_mem_tr'>
                    <Link to='/BTSMemRM' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="RM 이미지" />
                            <div>
                                <h4>RM</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BTSMemJin'>
                        <article className='tri_m_mem'>
                            <img src='' alt="진 이미지" />
                            <div>
                                <h4>진</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemSUGA'>
                        <article className='tri_m_mem'>
                            <img src='' alt="슈가 이미지" />
                            <div>
                                <h4>슈가</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemJhope'>
                        <article className='tri_m_mem'>
                            <img src='' alt="제이홉 이미지" />
                            <div>
                                <h4>제이홉</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/BTSMemJimin'>
                        <article className='tri_m_mem'>
                            <img src='' alt="지민 이미지" />
                            <div>
                                <h4>지민</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemV'>
                        <article className='tri_m_mem'>
                            <img src='' alt="뷔 이미지" />
                            <div>
                                <h4>뷔</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemJungKook'>
                        <article className='tri_m_mem'>
                            <img src='' alt="정국 이미지" />
                            <div>
                                <h4>정국</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>
            <FooterPart />
        </div>
    );
};
