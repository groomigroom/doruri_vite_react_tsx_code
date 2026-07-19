import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../BTS/main/BTSMain.css';

import MenuEng from '../../HomeEng/MenuEng';

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


export default function BTSMainEng() {
    return (
        <div className='bts_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/BTSMain'>한국어</Link>
                <Link to='/BTSMainEng' className="on">English</Link>
            </section>
            <img src='' alt="BTS logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="BTS deco" />BTS<img src={MainH2Deco} alt="BTS deco" /></h2>
            <p className='tri_m_intropp'>
                #####
                &apos;Stray Kids&apos;와 함께<br />
                시련 속에서도 계속<br />
                running out!</p>
            <img src='' className='tri_m_img' alt='BTS' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full str_m_mem_tr_full'>

                <section className='tri_m_mem_tr str_m_mem_tr'>
                    <Link to='/BTSMemRM' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src='' alt="RM" />
                            <div>
                                <h4>RM</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/BTSMemJin'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Jin" />
                            <div>
                                <h4>Jin</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemSUGA'>
                        <article className='tri_m_mem'>
                            <img src='' alt="SUGA" />
                            <div>
                                <h4>SUGA</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemJhope'>
                        <article className='tri_m_mem'>
                            <img src='' alt="j-hope" />
                            <div>
                                <h4>j-hope</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/BTSMemJimin'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Jimin" />
                            <div>
                                <h4>Jimin</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemV'>
                        <article className='tri_m_mem'>
                            <img src='' alt="V" />
                            <div>
                                <h4>V</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/BTSMemJungKook'>
                        <article className='tri_m_mem'>
                            <img src='' alt="Jung Kook" />
                            <div>
                                <h4>Jung Kook</h4>
                            </div>
                        </article>
                    </Link>

                </section>
            </section>
        </div>
    );
};
