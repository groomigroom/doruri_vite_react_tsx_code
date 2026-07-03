

import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './TwsMain.css';

import Menu from '../../Menu';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function TwsMain() {
    return (
        <div className='tws_m_full'>
            <Menu />
            <img src="" alt="TWS 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="TWS 로고 꾸미기" />TWS<img src={MainH2Deco} alt="TWS 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src="" className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full tws_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/IllMemYunah' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="신유 이미지" />
                            <h4>신유</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemMinju' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="도훈 이미지" />
                            <h4>도훈</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemMoka' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="영재 이미지" />
                            <h4>영재</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/IllMemWonhee' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="한진 이미지" />
                            <h4>한진</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemEroha' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="지훈 이미지" />
                            <h4>지훈</h4>
                        </article>
                    </Link>
                    <Link to='/IllMemEroha' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="경민 이미지" />
                            <h4>경민</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};
