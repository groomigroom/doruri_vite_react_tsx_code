import { Link } from 'react-router-dom';

import '../../triples/main/TriplesMain.css'
import './AespaMain.css';

import Menu from '../../Menu';

import MainH2Deco from '../../img/main_h2_deco.png';

export default function AespaMain() {
    return (
        <div className='aes_m_full'>
            <Menu />
            <img src="" alt="aespa 로고" className='tri_m_logo' />
            <h2 className='tri_m_h2 tri_m_h2_1'><img src={MainH2Deco} alt="aespa 로고 꾸미기" />aespa<img src={MainH2Deco} alt="aespa 로고 꾸미기" /></h2>
            <p className='tri_m_intropp'>
                #####<br />
                하루에 하루만 더<br />
                &apos;투모로우바이투게더&apos;와 함께 힘내 보아요.</p>
            <img src="" className='tri_m_img txt_m_img' />
            <h2 className='tri_m_h2 tri_m_h2_2'>▪ 멤버 ▪</h2>
            <section className='tri_m_mem_tr_full aes_m_mem_tr_full'>
                <section className='tri_m_mem_tr'>
                    <Link to='/AesMemKarina' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="카리나 이미지" />
                            <h4>카리나</h4>
                        </article>
                    </Link>
                    <Link to='/AesMemJijell' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="지젤 이미지" />
                            <h4>지젤</h4>
                        </article>
                    </Link>

                </section>

                <section className='tri_m_mem_tr'>
                    <Link to='/AesMemWinter' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="윈터 이미지" />
                            <h4>윈터</h4>
                        </article>
                    </Link>
                    <Link to='/AesMemNingning' className='tri_m_mem_a'>
                        <article className='tri_m_mem'>
                            <img src="" alt="닝닝 이미지" />
                            <h4>닝닝</h4>
                        </article>
                    </Link>


                </section>


            </section>


        </div>
    );
};
