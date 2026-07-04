import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../txt/main/TxtMain.css';
import './ResMain.css';

import Menu from '../../Menu';

// import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import txt_m_img from './img/txt_m_txtimg.jpg';

export default function ResMain() {
    return (
        <div className='res_m_full'>
            <Menu />
            <img src="" alt="RESCENE 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="RESCENE 꾸미기" />RESCENE<img src={MainH2Deco} alt="RESCENE 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src="" className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full txt_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/ResMemWoni' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="원이 이미지" />
                            <h4>원이</h4>
                        </article>
                    </Link>
                    <Link to='/ResMemLiv' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="리브 이미지" />
                            <h4>리브</h4>
                        </article>
                    </Link>
                    <Link to='/ResMemMinami' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="미나미 이미지" />
                            <h4>미나미</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr txt_m_mem_tr'>
                    <Link to='/ResMemMay' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="메이 이미지" />
                            <h4>메이</h4>
                        </article>
                    </Link>
                    <Link to='/ResMemJena' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="제나 이미지" />
                            <h4>제나</h4>
                        </article>
                    </Link>

                </section>


            </section>


        </div>
    );
};

