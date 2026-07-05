import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import '../../txt/main/TxtMain.css';
import './ALLDAY_PROJECTMain.css';

import Menu from '../../Menu';

// import Txt_m_logo from './img/txt_m_logo.svg';
import MainH2Deco from '../../img/main_h2_deco.png';
// import txt_m_img from './img/txt_m_txtimg.jpg';

export default function ALLDAY_PROJECTMain() {
    return (
        <div className='all_m_full'>
            <Menu />
            <img src="" alt="ALLDAY_PROJECT 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="ALLDAY_PROJECT 로고 꾸미기" />ALLDAY PROJECT<img src={MainH2Deco} alt="ALLDAY_PROJECT 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src="" className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full txt_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/AllMemAnnie' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="애니 이미지" />
                            <h4>애니</h4>
                        </article>
                    </Link>
                    <Link to='/AllMemTarzan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="타잔 이미지" />
                            <h4>타잔</h4>
                        </article>
                    </Link>
                    <Link to='/AllMemBailey' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="베일리 이미지" />
                            <h4>베일리</h4>
                        </article>
                    </Link>
                </section>

                <section className='tri_m_mem_tr txt_m_mem_tr'>
                    <Link to='/AllMemWoochan' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="우찬 이미지" />
                            <h4>우찬</h4>
                        </article>
                    </Link>
                    <Link to='/AllMemYoungseo' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="영서 이미지" />
                            <h4>영서</h4>
                        </article>
                    </Link>

                </section>


            </section>




            <Link to="/TxtEvent">이벤트</Link>
        </div>
    );
};
