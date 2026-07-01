import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './TxtMain.css';

import Menu from '../../Menu';

import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
import txt_m_img from './img/txt_m_txtimg.jpg';

export default function TxtMain() {
    return (
        <div className='txt_m_full'>
            <Menu />
            <img src={Txt_m_logo} alt="투바투 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="투바투 로고 꾸미기" />투모로우바이투게더<img src={MainH2Deco} alt="투바투 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src={txt_m_img} className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full txt_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="수빈 이미지" />
                            <h4>수빈</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="연준 이미지" />
                            <h4>연준</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="범규 이미지" />
                            <h4>범규</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr txt_m_mem_tr'>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="태현 이미지" />
                            <h4>태현</h4>
                        </article>
                    </Link>
                    <Link to='/TriplesMemS1' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="휴닝카이 이미지" />
                            <h4>휴닝카이</h4>
                        </article>
                    </Link>

                </section>


                <section className='tri_m_mem_tr'></section>
            </section>




            <Link to="/TxtEvent">이벤트</Link>
        </div>
    );
};
