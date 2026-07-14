import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../ALLDAY_PROJECT/main/ALLDAY_PROJECTMain.css';

import MenuEng from '../../HomeEng/MenuEng';

import All_m_logo from '../../ALLDAY_PROJECT/main/img/All_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import All_m_img from '../../ALLDAY_PROJECT/main/img/allday_m_allday_project.jpg';

import All_m_MemAnnie_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Annie.jpg';
import All_m_MemTarzan_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Tarzan.jpg';
import All_m_MemBailey_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Bailey.jpg';
import All_m_MemWoochan_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Woochan.jpg';
import All_m_MemYoungseo_img from '../../ALLDAY_PROJECT/main/img/allday_m_mem_Youngseo.jpg';

// #000000

export default function ALLDAY_PROJECTMainEng() {
    return (
        <div className='all_m_full'>
            <MenuEng />
            <section className="home_translate">
                <Link to='/ALLDAY_PROJECTMain'>한국어</Link>
                <Link to='/ALLDAY_PROJECTMainEng' className="on">English</Link>
            </section>
            <img src={All_m_logo} alt="ALLDAY_PROJECT logo" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ALLDAY_PROJECT deco" />ALLDAY PROJECT<img src={MainH2Deco} alt="ALLDAY_PROJECT deco" /></h2>
            <p className='tri_m_intropp'>
                Show me<br />
                You want me like that<br />
                with &apos;ALLDAY PROJECT&apos;!
            </p>
            <img src={All_m_img} className='tri_m_img all_m_img' alt='ALLDAY PROJECT' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ Members ▪</h2>
            <section className='tri_m_mem_tr_full all_m_mem_tr_full'>
                <section className='all_m_mem_tr3'>
                    <Link to='/AllMemAnnieEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemAnnie_img} alt="Annie" />
                            <div>
                                <h4>Annie</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AllMemTarzanEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemTarzan_img} alt="Tarzzan" />
                            <div>
                                <h4>Tarzzan</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AllMemBaileyEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemBailey_img} alt="Bailey" />
                            <div>
                                <h4>Bailey</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='all_m_mem_tr2'>
                    <Link to='/AllMemWoochanEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemWoochan_img} alt="Woochan" />
                            <div>
                                <h4>Woochan</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AllMemYoungseoEng' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemYoungseo_img} alt="Youngseo" />
                            <div>
                                <h4>Youngseo</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>




            <Link to="/TxtEvent">이벤트</Link>
        </div>
    );
};

