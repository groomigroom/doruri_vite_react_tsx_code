import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../txt/main/TxtMain.css';
import './IllitMain.css';

import Menu from '../../Menu';

import MainH2Deco from '../../img/main_h2_deco.png';


export default function IllitMain() {
    return (
        <div className='ill_m_full'>
            <Menu />
            <img src="" alt="illit 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="illit 로고 꾸미기" />ILLIT<img src={MainH2Deco} alt="illit 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src="" className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full txt_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/IllMemYunah' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="윤아 이미지" />
                            <h4>윤아</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemMinju' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="민주 이미지" />
                            <h4>민주</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemMoka' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="모카 이미지" />
                            <h4>모카</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr txt_m_mem_tr'>
                    <Link to='/IllMemWonhee' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="원희 이미지" />
                            <h4>원희</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemEroha' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="이로하 이미지" />
                            <h4>이로하</h4>
                        </article>
                    </Link>

                </section>


            </section>

        </div>
    );
};

