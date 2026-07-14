import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../Stray_Kids/main/StrayKidsMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import Str_m_logo from '../../Stray_Kids/main/img/Str_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import Str_m_img from '../../Stray_Kids/main/img/stray_m_stray_kids.jpg';

import Str_m_MemBangchan_img from '../../Stray_Kids/main/img/stray_m_mem_Bangchan.jpg';
import Str_m_MemLino_img from '../../Stray_Kids/main/img/stray_m_mem_Lino.jpg';
import Str_m_MemChangbin_img from '../../Stray_Kids/main/img/stray_m_mem_Changbin.jpg';
import Str_m_MemHyunjin_img from '../../Stray_Kids/main/img/stray_m_mem_Hyunjin.jpg';
import Str_m_MemHan_img from '../../Stray_Kids/main/img/stray_m_mem_Han.jpg';
import Str_m_MemFilix_img from '../../Stray_Kids/main/img/stray_m_mem_Filix.jpg';
import Str_m_MemSeungmin_img from '../../Stray_Kids/main/img/stray_m_mem_Seungmin.jpg';
import Str_m_MemIn_img from '../../Stray_Kids/main/img/stray_m_mem_In.jpg';

//#191919
//#ffffff


export default function StrayKidsMainEng() {
    return (
        <div className='str_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/StrayKidsMain'>한국어</Link>
                <Link to='/StrayKidsMainEng' className="on">English</Link>
            </section>
            <img src={Str_m_logo} alt="Stray Kids logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="Stray Kids deco" />Stray Kids<img src={MainH2Deco} alt="Stray Kids deco" /></h2>
            <p className='tri_m_intropp'>
                With<br />
                &apos;Stray Kids&apos;,<br />
                running out!</p>
            <img src={Str_m_img} className='tri_m_img' alt='Stray Kids' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full str_m_mem_tr_full'>

                <section className='tri_m_mem_tr str_m_mem_tr'>
                    <Link to='/StrayMemBangchanEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemBangchan_img} alt="Bangchan" />
                            <div>
                                <h4>Bangchan</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/StrayMemLinoEng'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemLino_img} alt="Lee Know" />
                            <div>
                                <h4>Lee Know</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemChangbinEng'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemChangbin_img} alt="Changbin" />
                            <div>
                                <h4>Changbin</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemHyunjinEng'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemHyunjin_img} alt="Hyunjin" />
                            <div>
                                <h4>Hyunjin</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/StrayMemHanEng'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemHan_img} alt="Han" />
                            <div>
                                <h4>Han</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemFilixEng'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemFilix_img} alt="Felix" />
                            <div>
                                <h4>Felix</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemSeungminEng'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemSeungmin_img} alt="Seungmin" />
                            <div>
                                <h4>Seungmin</h4>
                            </div>
                        </article>
                    </Link>

                    <Link to='/StrayMemInEng'>
                        <article className='tri_m_mem'>
                            <img src={Str_m_MemIn_img} alt="I.N" />
                            <div>
                                <h4>I.N</h4>
                            </div>
                        </article>
                    </Link>
                </section>
            </section>
        </div>
    );
};

