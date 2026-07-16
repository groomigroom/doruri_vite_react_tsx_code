import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './ALLDAY_PROJECTMain.css';

import Menu from '../../Menu';

import All_m_logo from './img/All_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import All_m_img from './img/allday_m_allday_project.jpg';

import All_m_MemAnnie_img from './img/allday_m_mem_Annie.jpg';
import All_m_MemTarzan_img from './img/allday_m_mem_Tarzan.jpg';
import All_m_MemBailey_img from './img/allday_m_mem_Bailey.jpg';
import All_m_MemWoochan_img from './img/allday_m_mem_Woochan.jpg';
import All_m_MemYoungseo_img from './img/allday_m_mem_Youngseo.jpg';

// #000000

export default function ALLDAY_PROJECTMain() {
    return (
        <div className='all_m_full'>
            <Menu />
            <section className="home_translate">
                <Link to='/ALLDAY_PROJECTMain' className="on">한국어</Link>
                <Link to='/ALLDAY_PROJECTMainEng'>English</Link>
            </section>
            <img src={All_m_logo} alt="ALLDAY_PROJECT 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ALLDAY_PROJECT 로고 꾸미기" />ALLDAY PROJECT<img src={MainH2Deco} alt="ALLDAY_PROJECT 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                &apos;ALLDAY PROJECT&apos;와 함께<br />
                Show me<br />
                You want me like that!
            </p>
            <img src={All_m_img} className='tri_m_img all_m_img' alt='ALLDAY PROJECT' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full all_m_mem_tr_full'>
                <section className='all_m_mem_tr3'>
                    <Link to='/AllMemAnnie' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemAnnie_img} alt="애니 이미지" />
                            <div>
                                <h4>애니</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AllMemTarzan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemTarzan_img} alt="타잔 이미지" />
                            <div>
                                <h4>타잔</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AllMemBailey' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemBailey_img} alt="베일리 이미지" />
                            <div>
                                <h4>베일리</h4>
                            </div>
                        </article>
                    </Link>
                </section>

                <section className='all_m_mem_tr2'>
                    <Link to='/AllMemWoochan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemWoochan_img} alt="우찬 이미지" />
                            <div>
                                <h4>우찬</h4>
                            </div>
                        </article>
                    </Link>
                    <Link to='/AllMemYoungseo' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src={All_m_MemYoungseo_img} alt="영서 이미지" />
                            <div>
                                <h4>영서</h4>
                            </div>
                        </article>
                    </Link>

                </section>


            </section>




            <Link to="/TxtEvent">이벤트</Link>
        </div>
    );
};
